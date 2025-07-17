import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="cont-padding overflow-hidden bg-black py-6 md:py-10 lg:py-15 dark:bg-white"
    >
      <div className="cont-max-width">
        <div className="relative w-fit">
          <div className="relative z-10 w-fit md:text-xl">
            <h1 className="section-header max-md:mb-2.5">About</h1>
            <p className="max-w-2xl">
              My Name is name is{" "}
              <span className="text-xl font-bold">Omar Alamin</span>, I’m a
              frontend{" "}
              <span className="text-xl font-semibold">Web developer</span>{" "}
              working from Cairo, Egypt. Experienced in building{" "}
              <span className="font-semibold">responsive</span>,{" "}
              <span className="font-semibold">SEO-optimized</span> websites.
            </p>
          </div>
          <motion.div
            transition={{
              delay: 0.6,
              duration: 0.3,
              ease: [0.15, 0.85, 0.35, 1],
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 -left-2 h-[calc(100%+10px)] w-[calc(100%+60px)] origin-left -translate-y-1/2 bg-white md:-left-6 md:h-[calc(100%+30px)] lg:h-[calc(100%+50px)] dark:bg-black"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
