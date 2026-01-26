'use client';

import { useEffect, useMemo, useRef } from 'react';
import { cn } from '@/lib/utils';

type Point3D = {
  x: number;
  y: number;
  z: number;
};

type HeroOrbProps = {
  className?: string;
};

const POINT_COUNT = 180;
const RADIUS = 130;
const FOV = 360;

const createPoints = (count: number) => {
  const points: Point3D[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i += 1) {
    const t = i / count;
    const inclination = Math.acos(1 - 2 * t);
    const azimuth = goldenAngle * i;
    points.push({
      x: RADIUS * Math.sin(inclination) * Math.cos(azimuth),
      y: RADIUS * Math.cos(inclination),
      z: RADIUS * Math.sin(inclination) * Math.sin(azimuth),
    });
  }

  return points;
};

const HeroOrb = ({ className }: HeroOrbProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const points = useMemo(() => createPoints(POINT_COUNT), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;

    if (!canvas || !wrapper) {
      return undefined;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return undefined;
    }

    let width = 0;
    let height = 0;
    let frameId = 0;
    let rotX = 0;
    let rotY = 0;
    let baseRotation = 0;
    let targetX = 0;
    let targetY = 0;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    let reduceMotion = prefersReducedMotion.matches;

    const colors = {
      primary: '190 84% 33%',
      accent: '190 30% 92%',
      foreground: '222 47% 11%',
    };

    const updateColors = () => {
      const style = getComputedStyle(document.documentElement);
      colors.primary = style.getPropertyValue('--primary').trim() || colors.primary;
      colors.accent = style.getPropertyValue('--accent').trim() || colors.accent;
      colors.foreground =
        style.getPropertyValue('--foreground').trim() || colors.foreground;
    };

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const rotatePoint = (point: Point3D, rx: number, ry: number) => {
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);

      let x = point.x * cosY + point.z * sinY;
      let z = -point.x * sinY + point.z * cosY;
      let y = point.y * cosX - z * sinX;
      z = point.y * sinX + z * cosX;

      return { x, y, z };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width / 2, height / 2);

      const projected = points
        .map((point) => {
          const rotated = rotatePoint(point, rotX, rotY + baseRotation);
          const depth = FOV / (FOV + rotated.z + RADIUS);
          return {
            ...rotated,
            depth,
            x: rotated.x * depth,
            y: rotated.y * depth,
          };
        })
        .sort((a, b) => a.depth - b.depth);

      projected.forEach((point) => {
        const alpha = Math.min(0.9, Math.max(0.15, point.depth));
        const size = Math.max(1, 2.6 * point.depth);
        ctx.beginPath();
        ctx.fillStyle = `hsl(${colors.primary} / ${alpha})`;
        ctx.shadowColor = `hsl(${colors.primary} / 0.35)`;
        ctx.shadowBlur = 6 * point.depth;
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
    };

    const tick = () => {
      if (!reduceMotion) {
        baseRotation += 0.0025;
        rotX += (targetY - rotX) * 0.08;
        rotY += (targetX - rotY) * 0.08;
      }
      draw();
      frameId = requestAnimationFrame(tick);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.6;
      targetY = y * 0.6;
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const handleMotionChange = () => {
      reduceMotion = prefersReducedMotion.matches;
    };

    const observer = new MutationObserver(updateColors);

    updateColors();
    resize();
    tick();

    wrapper.addEventListener('pointermove', handlePointerMove);
    wrapper.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('resize', resize);
    prefersReducedMotion.addEventListener('change', handleMotionChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      wrapper.removeEventListener('pointermove', handlePointerMove);
      wrapper.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', resize);
      prefersReducedMotion.removeEventListener('change', handleMotionChange);
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [points]);

  return (
    <div
      ref={wrapperRef}
      className={cn(
        'relative h-full w-full overflow-hidden rounded-2xl border border-border/60 bg-background/50 shadow-glow',
        className
      )}
      data-cursor="drag"
      data-cursor-label="Rotate"
    >
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex items-center justify-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Move to explore
      </div>
    </div>
  );
};

export default HeroOrb;
