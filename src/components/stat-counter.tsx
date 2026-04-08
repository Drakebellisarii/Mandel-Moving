'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function parse(str: string) {
  // Splits "12,400+" into { prefix:'', number:12400, suffix:'+', useCommas:true }
  const m = str.match(/^([^\d]*)(\d[\d,.]*)(.*)$/);
  if (!m) return { prefix: '', number: 0, suffix: str, useCommas: false };
  return {
    prefix: m[1],
    number: parseFloat(m[2].replace(/,/g, '')),
    suffix: m[3],
    useCommas: m[2].includes(','),
  };
}

function fmt(n: number, useCommas: boolean) {
  const rounded = Math.round(n);
  return useCommas ? rounded.toLocaleString() : rounded.toString();
}

interface StatCounterProps {
  value: string;
  className?: string;
}

/**
 * Animates a numeric stat from 0 to its target value when scrolled into view.
 * Purpose: draws attention to key proof-points without decorative distraction.
 */
export function StatCounter({ value, className }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { prefix, number, suffix, useCommas } = parse(value);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    const DURATION = 1600;
    const FPS = 60;
    const steps = Math.round((DURATION / 1000) * FPS);
    let frame = 0;

    const id = setInterval(() => {
      frame++;
      // Ease-out cubic
      const t = frame / steps;
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(fmt(number * eased, useCommas));
      if (frame >= steps) {
        setDisplay(fmt(number, useCommas));
        clearInterval(id);
      }
    }, DURATION / steps);

    return () => clearInterval(id);
  }, [isInView, number, useCommas]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
