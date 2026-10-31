"use client";
import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

export const popIn = {
  hidden: { opacity: 0, scale: 0.6, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 18 } },
};

// "some" = start as soon as any part is visible; a fraction would never be
// reached by tall grids/panels on short screens and leave them blank.
const VIEWPORT = { once: true, amount: "some", margin: "0px 0px -40px 0px" };

// Fades and lifts its children in when scrolled into view.
export function Reveal({ as = "div", delay = 0, y = 28, x = 0, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Container that reveals StaggerItem children one after another.
export function Stagger({ as = "div", className, children, gap = 0.08, delay = 0, onLoad = false, ...rest }) {
  const Tag = motion[as];
  const trigger = onLoad ? { animate: "show" } : { whileInView: "show", viewport: VIEWPORT };
  return (
    <Tag
      className={className}
      initial="hidden"
      {...trigger}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ as = "div", className, children, variants = fadeUp, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag className={className} variants={variants} {...rest}>
      {children}
    </Tag>
  );
}

// Counts from 0 to `to` the first time it is visible.
export function CountUp({ to, duration = 1.8, format = (n) => Math.round(n).toLocaleString("en-IN") }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, { duration, ease: EASE, onUpdate: setValue });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  return <span ref={ref}>{format(value)}</span>;
}
