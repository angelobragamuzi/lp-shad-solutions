import { motion } from "framer-motion";
import { forwardRef } from "react";

const variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

const Reveal = forwardRef(function Reveal(
    { children, delay = 0, className, as = "div", ...rest },
    ref
) {
    const MotionTag = motion[as] || motion.div;

    return (
        <MotionTag
            ref={ref}
            className={className}
            {...rest}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
        >
            {children}
        </MotionTag>
    );
});

export default Reveal;
