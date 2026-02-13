"use client";

import { motion, type Variants } from "framer-motion";

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  y?: number;
  duration?: number;
  amount?: number;
  delay?: number;
};

const MotionComponents = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
};

/**
 * Wraps content and reveals it on scroll with a subtle fade + translate Y.
 */
export function ScrollReveal({
  children,
  className = "",
  as = "div",
  y = 20,
  duration = 0.5,
  amount = 0.12,
  delay = 0,
}: ScrollRevealProps) {
  const Component = MotionComponents[as];
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
    >
      {children}
    </Component>
  );
}

type ScrollRevealStaggerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
  staggerDelay?: number;
  amount?: number;
};

/**
 * Wraps a list of children and reveals them with a staggered animation on scroll.
 */
export function ScrollRevealStagger({
  children,
  className = "",
  as = "div",
  staggerDelay = 0.08,
  amount = 0.1,
}: ScrollRevealStaggerProps) {
  const Component = MotionComponents[as];
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: 0.05 },
    },
  };

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={container}
    >
      {children}
    </Component>
  );
}

export function ScrollRevealStaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  );
}
