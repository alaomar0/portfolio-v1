import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="cont-padding cont-max-width flex flex-col items-center gap-20 overflow-hidden py-50 md:gap-29 md:pt-80">
      <h1 className="text-4xl leading-13 font-bold tracking-wide md:text-5xl lg:text-6xl lg:leading-20">
        Omar,
        <span className="inline-block rounded-sm bg-black px-2 text-white md:py-2 lg:px-3 dark:bg-white dark:text-black">
          Front-end
        </span>
        <br />
        Web <span className="text-white uppercase dark:text-black">Dev</span>
        eloper
      </h1>
      <span className="relative">
        <Link
          to="/#contact"
          className="rounded-sm bg-white px-5 py-3 text-xl font-semibold hover:bg-black hover:text-white hover:transition hover:duration-200 md:px-6 md:py-4 md:text-3xl lg:px-7 lg:text-4xl dark:bg-black dark:hover:bg-white dark:hover:text-black"
        >
          Contact Me
        </Link>

        {/* Bars */}
        {[
          "-right-15.5 md:-right-15.5 lg:-right-14.5",
          "-right-69  md:-right-86 lg:-right-100",
        ].map((c, i) => (
          <motion.div
            transition={{
              duration: 0.6,
              delay: i * 0.3,
              ease: [0.15, 0.85, 0.35, 1],
            }}
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className={cn(
              "absolute bottom-112 -z-10 h-17 w-145 origin-right -rotate-62 bg-black md:bottom-144 md:h-19 md:w-192 lg:bottom-158 lg:h-24 lg:w-210 lg:-rotate-61 dark:bg-white",
              c,
            )}
          ></motion.div>
        ))}
      </span>
    </section>
  );
}
