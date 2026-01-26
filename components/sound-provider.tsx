'use client';

import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type SoundType = 'hover' | 'click' | 'cta' | 'drag' | 'select';

type SoundContextValue = {
  enabled: boolean;
  toggle: () => void;
  play: (type: SoundType) => void;
};

type TonePreset = {
  frequency: number;
  type: OscillatorType;
  duration: number;
  volume: number;
  slideTo?: number;
};

type MotionChannel = 'pointer' | 'scroll';

type MotionNodes = {
  osc: OscillatorNode;
  gain: GainNode;
  panner?: StereoPannerNode;
};

const SOUND_PRESETS: Record<SoundType, TonePreset> = {
  hover: {
    frequency: 240,
    type: 'sine',
    duration: 0.05,
    volume: 0.04,
  },
  click: {
    frequency: 420,
    type: 'triangle',
    duration: 0.07,
    volume: 0.08,
  },
  cta: {
    frequency: 520,
    type: 'triangle',
    duration: 0.12,
    volume: 0.12,
    slideTo: 640,
  },
  drag: {
    frequency: 200,
    type: 'sine',
    duration: 0.08,
    volume: 0.05,
    slideTo: 260,
  },
  select: {
    frequency: 360,
    type: 'triangle',
    duration: 0.1,
    volume: 0.1,
    slideTo: 420,
  },
};

const THROTTLE_MS: Record<SoundType, number> = {
  hover: 140,
  click: 60,
  cta: 120,
  drag: 160,
  select: 120,
};

const MOTION_CONFIG: Record<
  MotionChannel,
  { base: number; range: number; maxGain: number; type: OscillatorType }
> = {
  pointer: {
    base: 140,
    range: 220,
    maxGain: 0.08,
    type: 'sine',
  },
  scroll: {
    base: 120,
    range: 200,
    maxGain: 0.07,
    type: 'triangle',
  },
};

const SELECTION_THROTTLE_MS = 320;

const SoundContext = createContext<SoundContextValue | null>(null);

const getSoundPreference = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.localStorage.getItem('sound-enabled') === 'true';
};

const setSoundPreference = (value: boolean) => {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem('sound-enabled', value ? 'true' : 'false');
};

const resolveSoundForEvent = (
  target: Element | null,
  kind: 'hover' | 'click' | 'down'
): SoundType | null => {
  if (!target) {
    return null;
  }

  const explicit =
    target.closest(`[data-sound-${kind}]`)?.getAttribute(`data-sound-${kind}`) ??
    target.closest('[data-sound]')?.getAttribute('data-sound');

  if (explicit) {
    return explicit as SoundType;
  }

  const cursorState = target.closest('[data-cursor]')?.getAttribute('data-cursor');
  if (cursorState) {
    if (kind === 'hover') {
      if (cursorState === 'cta') return 'cta';
      if (cursorState === 'card') return 'hover';
      if (cursorState === 'drag') return 'drag';
      if (cursorState === 'link') return 'hover';
    }
    if (kind === 'click') {
      if (cursorState === 'cta') return 'cta';
      if (cursorState === 'link') return 'click';
    }
    if (kind === 'down' && cursorState === 'drag') {
      return 'drag';
    }
  }

  if (kind === 'click' && target.closest('button, a, [role="button"]')) {
    return 'click';
  }

  if (kind === 'hover' && target.closest('button, a, [role="button"]')) {
    return 'hover';
  }

  return null;
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a <SoundProvider />');
  }
  return context;
};

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [enabled, setEnabled] = useState(false);
  const enabledRef = useRef(false);
  const audioRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const pointerNodesRef = useRef<MotionNodes | null>(null);
  const scrollNodesRef = useRef<MotionNodes | null>(null);
  const pointerFadeRef = useRef<number | null>(null);
  const scrollFadeRef = useRef<number | null>(null);
  const pointerStateRef = useRef({ x: 0, y: 0, time: 0 });
  const scrollStateRef = useRef({ y: 0, time: 0 });
  const selectionRef = useRef({ text: '', time: 0 });
  const lastPlayedRef = useRef<Record<SoundType, number>>({
    hover: 0,
    click: 0,
    cta: 0,
    drag: 0,
    select: 0,
  });
  const lastHoverRef = useRef<Element | null>(null);
  const reduceMotionRef = useRef(false);

  const initAudio = useCallback(() => {
    if (audioRef.current && masterRef.current) {
      return audioRef.current;
    }
    const context = new AudioContext();
    const master = context.createGain();
    master.gain.value = 0.16;
    master.connect(context.destination);
    audioRef.current = context;
    masterRef.current = master;
    return context;
  }, []);

  const createMotionNodes = useCallback(
    (context: AudioContext, channel: MotionChannel): MotionNodes => {
      const config = MOTION_CONFIG[channel];
      const osc = context.createOscillator();
      const gain = context.createGain();
      const canPan = 'createStereoPanner' in context;
      const panner = canPan ? context.createStereoPanner() : undefined;
      const destination = masterRef.current ?? context.destination;

      osc.type = config.type;
      osc.frequency.setValueAtTime(config.base, context.currentTime);
      gain.gain.setValueAtTime(0, context.currentTime);

      osc.connect(gain);
      if (panner) {
        gain.connect(panner);
        panner.connect(destination);
      } else {
        gain.connect(destination);
      }

      osc.start();

      return { osc, gain, panner };
    },
    []
  );

  const ensureMotionNodes = useCallback(
    (channel: MotionChannel) => {
      const context = initAudio();
      if (context.state === 'suspended') {
        void context.resume();
      }

      if (channel === 'pointer') {
        if (!pointerNodesRef.current) {
          pointerNodesRef.current = createMotionNodes(context, 'pointer');
        }
        return pointerNodesRef.current;
      }

      if (!scrollNodesRef.current) {
        scrollNodesRef.current = createMotionNodes(context, 'scroll');
      }
      return scrollNodesRef.current;
    },
    [createMotionNodes, initAudio]
  );

  const setParam = (param: AudioParam, value: number, now: number, time = 0.08) => {
    param.cancelScheduledValues(now);
    param.setTargetAtTime(value, now, time);
  };

  const updateMotion = useCallback(
    (channel: MotionChannel, intensity: number, pan = 0) => {
      if (!enabledRef.current) {
        return;
      }
      if (reduceMotionRef.current) {
        return;
      }

      const nodes = ensureMotionNodes(channel);
      const context = audioRef.current;
      if (!nodes || !context) {
        return;
      }

      if (context.state === 'suspended') {
        void context.resume();
      }

      const config = MOTION_CONFIG[channel];
      const now = context.currentTime;
      const clamped = Math.max(0, Math.min(1, intensity));
      const gainTarget = config.maxGain * clamped;
      const freqTarget = config.base + config.range * clamped;

      setParam(nodes.gain.gain, gainTarget, now, 0.08);
      setParam(nodes.osc.frequency, freqTarget, now, 0.08);
      if (nodes.panner) {
        setParam(nodes.panner.pan, Math.max(-0.6, Math.min(0.6, pan)), now, 0.08);
      }
    },
    [ensureMotionNodes]
  );

  const fadeMotion = useCallback((channel: MotionChannel, duration = 0.12) => {
    const nodes = channel === 'pointer' ? pointerNodesRef.current : scrollNodesRef.current;
    const context = audioRef.current;
    if (!nodes || !context) {
      return;
    }
    const now = context.currentTime;
    setParam(nodes.gain.gain, 0, now, duration);
  }, []);

  const playTone = useCallback(
    (type: SoundType, force = false) => {
      if (!force && !enabledRef.current) {
        return;
      }

      if (
        !force &&
        reduceMotionRef.current &&
        (type === 'hover' || type === 'drag')
      ) {
        return;
      }

      const now = performance.now();
      const last = lastPlayedRef.current[type];
      if (!force && now - last < THROTTLE_MS[type]) {
        return;
      }
      lastPlayedRef.current[type] = now;

      const context = initAudio();
      if (context.state === 'suspended') {
        void context.resume();
      }

      const preset = SOUND_PRESETS[type];
      const osc = context.createOscillator();
      const gain = context.createGain();

      osc.type = preset.type;
      osc.frequency.setValueAtTime(preset.frequency, context.currentTime);
      if (preset.slideTo) {
        osc.frequency.exponentialRampToValueAtTime(
          preset.slideTo,
          context.currentTime + preset.duration
        );
      }

      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        preset.volume,
        context.currentTime + 0.015
      );
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        context.currentTime + preset.duration
      );

      osc.connect(gain);
      gain.connect(masterRef.current ?? context.destination);

      osc.start();
      osc.stop(context.currentTime + preset.duration + 0.05);
    },
    [initAudio]
  );

  const enableSound = useCallback(() => {
    enabledRef.current = true;
    setEnabled(true);
    setSoundPreference(true);
    initAudio();
    playTone('cta', true);
  }, [initAudio, playTone]);

  const disableSound = useCallback(() => {
    enabledRef.current = false;
    setEnabled(false);
    setSoundPreference(false);
    fadeMotion('pointer', 0.06);
    fadeMotion('scroll', 0.06);
    if (audioRef.current?.state === 'running') {
      void audioRef.current.suspend();
    }
  }, [fadeMotion]);

  const toggle = useCallback(() => {
    if (enabledRef.current) {
      disableSound();
    } else {
      enableSound();
    }
  }, [disableSound, enableSound]);

  useEffect(() => {
    const stored = getSoundPreference();
    if (stored) {
      enableSound();
    }
  }, [enableSound]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduceMotionRef.current = media.matches;
    const handleChange = () => {
      reduceMotionRef.current = media.matches;
    };
    media.addEventListener('change', handleChange);
    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest(
        '[data-sound-hover],[data-sound],[data-cursor],a,button,[role="button"]'
      );

      if (!interactive) {
        lastHoverRef.current = null;
        return;
      }

      if (lastHoverRef.current === interactive) {
        return;
      }

      lastHoverRef.current = interactive;

      if (!enabledRef.current) {
        return;
      }

      const sound = resolveSoundForEvent(interactive, 'hover');
      if (sound) {
        playTone(sound);
      }
    };

    const handlePointerOut = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const related = event.relatedTarget instanceof Element ? event.relatedTarget : null;
      if (!target) {
        lastHoverRef.current = null;
        return;
      }
      const current = lastHoverRef.current;
      if (current && !current.contains(related)) {
        lastHoverRef.current = null;
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest('[data-sound-down],[data-sound],[data-cursor]');
      if (!interactive || !enabledRef.current) {
        return;
      }
      const sound = resolveSoundForEvent(interactive, 'down');
      if (sound) {
        playTone(sound);
      }
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target || !enabledRef.current) {
        return;
      }

      const isDisabledButton =
        target.closest('button')?.hasAttribute('disabled') ||
        target.closest('[aria-disabled="true"]');
      if (isDisabledButton) {
        return;
      }

      const sound = resolveSoundForEvent(target, 'click');
      if (sound) {
        playTone(sound);
      }
    };

    document.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointerout', handlePointerOut);
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('click', handleClick);
    };
  }, [enabled, playTone]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    let scrollRaf = 0;
    let latestScrollY = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (!enabledRef.current) {
        return;
      }

      const now = performance.now();
      const last = pointerStateRef.current;
      const dt = Math.max(now - last.time, 16);
      const dx = event.clientX - last.x;
      const dy = event.clientY - last.y;
      const speed = Math.min(Math.hypot(dx, dy) / dt, 1.4);
      const intensity = Math.min(speed / 1.1, 1);
      const pan = window.innerWidth
        ? (event.clientX / window.innerWidth - 0.5) * 1.2
        : 0;

      updateMotion('pointer', intensity, pan);

      pointerStateRef.current = {
        x: event.clientX,
        y: event.clientY,
        time: now,
      };

      if (pointerFadeRef.current) {
        window.clearTimeout(pointerFadeRef.current);
      }
      pointerFadeRef.current = window.setTimeout(() => {
        fadeMotion('pointer', 0.14);
      }, 140);
    };

    const processScroll = () => {
      scrollRaf = 0;
      if (!enabledRef.current) {
        return;
      }
      const now = performance.now();
      const last = scrollStateRef.current;
      const currentY = latestScrollY;
      const dt = Math.max(now - last.time, 16);
      const delta = currentY - last.y;
      const speed = Math.min(Math.abs(delta) / dt, 1.4);
      const intensity = Math.min(speed / 1.2, 1);
      const pan = delta >= 0 ? 0.15 : -0.15;

      updateMotion('scroll', intensity, pan);

      scrollStateRef.current = {
        y: currentY,
        time: now,
      };

      if (scrollFadeRef.current) {
        window.clearTimeout(scrollFadeRef.current);
      }
      scrollFadeRef.current = window.setTimeout(() => {
        fadeMotion('scroll', 0.16);
      }, 160);
    };

    const handleScroll = () => {
      latestScrollY = window.scrollY;
      if (!scrollRaf) {
        scrollRaf = window.requestAnimationFrame(processScroll);
      }
    };

    const handleSelectionChange = () => {
      if (!enabledRef.current) {
        return;
      }
      const selection = document.getSelection();
      const text = selection?.toString().trim() ?? '';
      const now = performance.now();
      if (!text || text.length < 2) {
        selectionRef.current = { text: '', time: now };
        return;
      }
      if (
        text === selectionRef.current.text &&
        now - selectionRef.current.time < SELECTION_THROTTLE_MS
      ) {
        return;
      }
      selectionRef.current = { text, time: now };
      playTone('select');
    };

    pointerStateRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      time: performance.now(),
    };
    scrollStateRef.current = {
      y: window.scrollY,
      time: performance.now(),
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('selectionchange', handleSelectionChange);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('selectionchange', handleSelectionChange);
      if (scrollRaf) {
        window.cancelAnimationFrame(scrollRaf);
      }
      if (pointerFadeRef.current) {
        window.clearTimeout(pointerFadeRef.current);
      }
      if (scrollFadeRef.current) {
        window.clearTimeout(scrollFadeRef.current);
      }
    };
  }, [enabled, fadeMotion, playTone, updateMotion]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const unlock = () => {
      initAudio();
    };

    window.addEventListener('pointerdown', unlock, { once: true });
    window.addEventListener('keydown', unlock, { once: true });

    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, [enabled, initAudio]);

  const value = useMemo(
    () => ({
      enabled,
      toggle,
      play: playTone,
    }),
    [enabled, toggle, playTone]
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
};
