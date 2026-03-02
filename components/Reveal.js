import { motion, useReducedMotion } from "framer-motion";
import { forwardRef } from "react";

const Reveal = forwardRef(function Reveal(
    {
        children,
        delay = 0,
        duration = 0.72,
        distance = 28,
        direction = "up",
        className,
        as = "div",
        once = true,
        amount = 0.22,
        ...rest
    },
    ref
) {
    const shouldReduceMotion = useReducedMotion();
    const MotionTag = motion[as] || motion.div;

    const axis =
        direction === "left"
            ? { x: distance, y: 0 }
            : direction === "right"
              ? { x: -distance, y: 0 }
              : direction === "down"
                ? { x: 0, y: -distance }
                : { x: 0, y: distance };

    const variants = shouldReduceMotion
        ? {
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
          }
        : {
              hidden: {
                  opacity: 0,
                  ...axis,
                  scale: 0.985,
                  filter: "blur(8px)",
              },
              visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
              },
          };

    return (
        <MotionTag
            ref={ref}
            className={`scroll-reveal${className ? ` ${className}` : ""}`}
            {...rest}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
            transition={{
                duration: shouldReduceMotion ? 0.01 : duration,
                ease: [0.22, 1, 0.36, 1],
                delay,
            }}
        >
            {children}
        </MotionTag>
    );
});

export default Reveal;
