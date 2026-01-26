'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type MetricCounterProps = {
  value: string;
  label: string;
  className?: string;
};

const formatNumber = (value: number, decimals: number) => {
  if (decimals === 0) {
    return Math.round(value).toString();
  }
  return value.toFixed(decimals);
};

const MetricCounter = ({ value, label, className }: MetricCounterProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [displayValue, setDisplayValue] = useState(value);

  const parsed = useMemo(() => {
    const match = value.match(/([\d.]+)/);
    if (!match) {
      return { number: null, suffix: value, decimals: 0 };
    }
    const number = Number.parseFloat(match[1]);
    const decimals = match[1].includes('.') ? match[1].split('.')[1].length : 0;
    const suffix = value.replace(match[1], '');
    return { number, suffix, decimals };
  }, [value]);

  useEffect(() => {
    if (parsed.number === null) {
      return undefined;
    }

    const node = containerRef.current;
    if (!node) {
      return undefined;
    }

    let frameId = 0;
    let hasAnimated = false;

    const animate = () => {
      const start = performance.now();
      const duration = 1200;

      const step = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const nextValue = parsed.number * eased;

        setDisplayValue(`${formatNumber(nextValue, parsed.decimals)}${parsed.suffix}`);

        if (progress < 1) {
          frameId = requestAnimationFrame(step);
        }
      };

      frameId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || hasAnimated) {
          return;
        }
        if (entry.isIntersecting) {
          hasAnimated = true;
          animate();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [parsed.decimals, parsed.number, parsed.suffix]);

  return (
    <div ref={containerRef} className={cn('space-y-2', className)}>
      <p className="text-3xl font-semibold text-foreground tabular-nums">
        {displayValue}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default MetricCounter;
