'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const resolveCursorState = (target: Element | null) => {
  const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;
  if (cursorTarget) {
    return {
      state: cursorTarget.getAttribute('data-cursor') || 'default',
      label: cursorTarget.getAttribute('data-cursor-label') || '',
    };
  }

  const labelTarget = target?.closest('[data-cursor-label]') as HTMLElement | null;
  const label = labelTarget?.getAttribute('data-cursor-label') || '';

  if (target?.closest('input, textarea, select')) {
    return { state: 'text', label };
  }

  if (target?.closest('a, button, [role="button"], [data-cursor-link]')) {
    return { state: 'link', label };
  }

  return { state: 'default', label: '' };
};

const CustomCursor = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const stateRef = useRef('default');
  const labelRef = useRef('');
  const visibleRef = useRef(false);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState('default');
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  const setVisibility = (value: boolean) => {
    visibleRef.current = value;
    setVisible(value);
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const media = window.matchMedia('(pointer: fine) and (hover: hover)');
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener('change', update);

    return () => {
      media.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove('cursor-enabled');
      return;
    }

    document.body.classList.add('cursor-enabled');
    return () => {
      document.body.classList.remove('cursor-enabled');
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const wrapper = wrapperRef.current;
    if (!wrapper) {
      return undefined;
    }

    let frameId = 0;
    let reduceMotion = false;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    reduceMotion = prefersReducedMotion.matches;

    const initX = window.innerWidth / 2;
    const initY = window.innerHeight / 2;
    posRef.current = { x: initX, y: initY };
    targetRef.current = { x: initX, y: initY };
    wrapper.style.transform = `translate3d(${initX}px, ${initY}px, 0)`;

    const updateState = (target: EventTarget | null) => {
      const element = target instanceof Element ? target : null;
      const next = resolveCursorState(element);

      if (stateRef.current !== next.state) {
        stateRef.current = next.state;
        setState(next.state);
      }

      if (labelRef.current !== next.label) {
        labelRef.current = next.label;
        setLabel(next.label);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      if (!visibleRef.current) {
        setVisibility(true);
      }
      updateState(event.target);
    };

    const handlePointerDown = () => {
      setPressed(true);
    };

    const handlePointerUp = () => {
      setPressed(false);
    };

    const handleLeave = () => {
      setVisibility(false);
    };

    const handleEnter = () => {
      setVisibility(true);
    };

    const handleMotionChange = () => {
      reduceMotion = prefersReducedMotion.matches;
    };

    const tick = () => {
      const ease = reduceMotion ? 1 : 0.18;
      const { x, y } = posRef.current;
      const target = targetRef.current;
      const nextX = x + (target.x - x) * ease;
      const nextY = y + (target.y - y) * ease;
      posRef.current = { x: nextX, y: nextY };
      wrapper.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`;
      frameId = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointerleave', handleLeave);
    window.addEventListener('pointerenter', handleEnter);
    prefersReducedMotion.addEventListener('change', handleMotionChange);

    tick();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointerleave', handleLeave);
      window.removeEventListener('pointerenter', handleEnter);
      prefersReducedMotion.removeEventListener('change', handleMotionChange);
      cancelAnimationFrame(frameId);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={wrapperRef}
      className={cn(
        'cursor-shell',
        visible ? 'is-visible' : 'is-hidden'
      )}
      data-state={state}
      data-pressed={pressed ? 'true' : 'false'}
      data-visible={visible ? 'true' : 'false'}
      data-has-label={label ? 'true' : 'false'}
    >
      <div className="cursor-halo" />
      <div className="cursor-orbit">
        <span className="cursor-spark" />
      </div>
      <div className="cursor-ring" />
      <div className="cursor-dot" />
      {label ? <div className="cursor-label">{label}</div> : null}
    </div>
  );
};

export default CustomCursor;
