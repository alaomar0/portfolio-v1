import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-20 px-4 py-50 md:gap-29 md:pt-80">
      <h1 className="text-4xl leading-13 font-bold tracking-wide md:text-5xl lg:text-6xl lg:leading-20">
        Omar,
        <span className="inline-block rounded-sm bg-black px-2 text-white dark:bg-white dark:text-black">
          Front-end
        </span>
        <br />
        Web <span className="text-white uppercase dark:text-black">Dev</span>
        eloper
      </h1>
      <span className="relative">
        <Link
          to="/#contact"
          className="rounded-sm bg-white px-5 py-3 text-xl font-semibold transition duration-200 hover:invert-100 md:px-6 md:py-4 md:text-3xl lg:px-7 lg:text-4xl dark:bg-black"
        >
          Contact Me
        </Link>

        {/* First Bar */}
        <div
          style={{
            animationDelay: ".4s",
          }}
          className="animate-expand-small md:animate-expand-large absolute -top-130 left-59 -z-10 h-17 w-1 origin-right -rotate-62 bg-black md:-top-165 md:left-77.5 md:h-19 lg:-top-170 lg:left-80.5 lg:h-24 lg:-rotate-61 dark:bg-white"
        ></div>
        {/* Second Bar */}
        <div
          style={{
            animationDelay: ".7s",
          }}
          className="animate-expand-small md:animate-expand-large absolute -top-130 left-112 -z-10 h-17 w-1 origin-right -rotate-62 bg-black md:-top-165 md:left-148 md:h-19 lg:-top-170 lg:left-166.5 lg:h-24 lg:-rotate-61 dark:bg-white"
        ></div>
      </span>
    </section>
  );
}
