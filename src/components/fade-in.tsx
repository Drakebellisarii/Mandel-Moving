'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const ease = [0.25, 0.1, 0.25, 1] as const;

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  distance?: number;
}

/**
 * Fades a single element into view when it enters the viewport.
 * Purpose: signals new content sections without distracting movement.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 22,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: direction === 'up' ? distance : 0,
        x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

interface FadeInGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

/**
 * Staggers children into view sequentially.
 * Purpose: helps the eye follow grid/list structure without visual overload.
 */
export function FadeInGroup({
  children,
  className,
  stagger = 0.09,
  delay = 0,
}: FadeInGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

interface FadeInItemProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'none';
}

/**
 * Child item used inside FadeInGroup — inherits the stagger timing.
 */
export function FadeInItem({ children, className, direction = 'up' }: FadeInItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: direction === 'up' ? 20 : 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
      }}
    >
      {children}
    </motion.div>
  );
}
