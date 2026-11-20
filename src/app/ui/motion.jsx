"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion, animate } from "framer-motion";
let l = [0.22, 1, 0.36, 1];
let d = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: l,
    },
  },
};
let popIn = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    y: 12,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 18,
    },
  },
};
let x = {
  once: true,
  amount: "some",
  margin: "0px 0px -40px 0px",
};
function p(props) {
  let { as = "div", delay = 0, y = 28, x: r = 0, className, children, ...d } = props,
    Ch = motion[as];
  return (
    <Ch
      className={className}
      initial={{
        opacity: 0,
        y: y,
        x: r,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={x}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: l,
      }}
      {...d}
    >
      {children}
    </Ch>
  );
}
function f(props) {
  let { as = "div", className, children, gap = 0.08, delay = 0, onLoad = false, ...l } = props,
    Cd = motion[as];
  return (
    <Cd
      className={className}
      initial="hidden"
      {...(onLoad
        ? {
            animate: "show",
          }
        : {
            whileInView: "show",
            viewport: x,
          })}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: gap,
            delayChildren: delay,
          },
        },
      }}
      {...l}
    >
      {children}
    </Cd>
  );
}
function u(props) {
  let { as = "div", className, children, variants = d, ...o } = props,
    Cc = motion[as];
  return (
    <Cc className={className} variants={variants} {...o}>
      {children}
    </Cc>
  );
}
function CountUp(t) {
  let { to, duration = 1.8, format = (t) => Math.round(t).toLocaleString("en-IN") } = t,
    d = useRef(null),
    h = useInView(d, {
      once: true,
      amount: 0.6,
    }),
    x = useReducedMotion(),
    [p, f] = useState(0);
  return (
    useEffect(() => {
      if (!h) return;
      if (x) {
        f(to);
        return;
      }
      let t = animate(0, to, {
        duration: duration,
        ease: l,
        onUpdate: f,
      });
      return () => t.stop();
    }, [h, to, duration, x]),
    (<span ref={d}>{format(p)}</span>)
  );
}
export { p as Reveal, f as Stagger, u as StaggerItem, CountUp, popIn };
