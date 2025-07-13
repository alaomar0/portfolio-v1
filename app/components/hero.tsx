import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="cont-padding cont-max-width flex h-lvh overflow-hidden pt-65 md:pt-80">
      <div className="flex w-full flex-col items-center gap-20 md:gap-29">
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
            className="block rounded-tl-sm rounded-br-sm bg-white px-5 py-3 text-xl font-semibold hover:bg-black hover:text-white hover:transition hover:duration-200 md:px-6 md:py-4 md:text-3xl lg:px-7 lg:text-4xl dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Contact Me
          </Link>

          {/* Bars 
          Bar*1 => left = -bar-height / cos(90 + rotate-angle) note: if you noticed, the rotate-angle is negative
          Bar*2 => left = 100% - (cont-height*tan(90 + rotate-angle)) note: if you noticed, the rotate-angle is negative
          */}
          {[
            "-left-[calc(4.25rem/0.9)] md:-left-[calc(4.75rem/0.9)] lg:-left-[calc(5.75rem/0.89)]",
            "left-[calc(100%-(3.25rem*0.466))] md:left-[calc(100%-(4.25rem*0.466))] lg:left-[calc(100%-(4.5rem*0.5))]",
          ].map((c, i) => (
            <div
              key={i}
              className={cn(
                "absolute -z-10 origin-top-left -rotate-65 lg:-rotate-63",
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
                className="h-17 w-160 origin-right -translate-x-10 bg-black md:h-19 md:w-200 lg:h-23 lg:w-220 dark:bg-white"
              ></motion.div>
            </div>
          ))}
        </span>
      </div>
    </section>
  );
}
