import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="absolute top-0 left-0 z-40 h-1 w-full origin-left bg-black dark:bg-white"
      style={{ scaleX }}
    ></motion.div>
  );
}
