import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="cont-padding cont-max-width flex min-h-lvh overflow-hidden pt-65 pb-40 md:pt-80">
      <div className="flex w-full flex-col items-center gap-22 md:gap-30">
        <h1 className="text-4xl leading-13 font-bold tracking-wide md:text-5xl lg:text-6xl lg:leading-20">
          Omar,
          <span className="isolate text-white mix-blend-difference">
            Front-end
          </span>
          <br />
          Web <span className="text-white uppercase dark:text-black">Dev</span>
          eloper
        </h1>
        <span className="relative">
          <Link
            aria-label="Contact Me"
            to="/#contact"
            className="block rounded-tl-sm rounded-br-sm bg-white px-5 py-2.5 text-xl font-semibold hover:bg-black hover:text-white hover:transition hover:duration-200 md:px-6 md:py-4 md:text-2xl lg:px-7 lg:text-3xl dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Contact Me
          </Link>

          {/* Bars 
          Bar*1 => left = -bar-height / cos(90 + rotate-angle) note: if you noticed, the rotate-angle is negative
          Bar*2 => left = 100% - (cont-height*tan(90 + rotate-angle)) note: if you noticed, the rotate-angle is negative
          */}
          {[
            "-left-[calc(4.25rem/0.866)] md:-left-[calc(5.5rem/0.866)] lg:-left-[calc(7rem/0.829)]",
            "left-[calc(100%-(3rem*0.577))] md:left-[calc(100%-(4rem*0.577))] lg:left-[calc(100%-(4.25rem*0.674))]",
          ].map((c, i) => (
            <div
              key={i}
              className={cn(
                "absolute -z-10 origin-top-left -rotate-60 lg:-rotate-56",
                c,
              )}
            >
              <motion.div
                transition={{
                  duration: 0.6,
                  delay: i * 0.3,
                  ease: [0.15, 0.85, 0.35, 1],
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                className="h-17 w-165 origin-right -translate-x-10 bg-black md:h-22 md:w-205 lg:h-28 lg:w-235 dark:bg-white"
              ></motion.div>
            </div>
          ))}
        </span>
      </div>
    </section>
  );
}
