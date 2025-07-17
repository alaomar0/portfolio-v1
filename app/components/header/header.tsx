import { Link } from "react-router";
import logo from "/app/assets/logo.svg";
import SideNav from "./side-nav";
import ThemeToggleButton from "./theme-toggle-btn";
import { cn } from "~/lib/utils";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import SideNavBtn from "./side-nav-btn";

export const LINKS = [
  { name: "About", to: "/#about" },
  { name: "Projects", to: "/#projects" },
  { name: "Skills", to: "/#skills" },
  { name: "Contact", to: "/#contact" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    setScrolled(current > 0);
  });

  return (
    <header
      className={cn(
        "cont-padding absolute z-30 w-full bg-transparent py-4 transition-colors duration-300 md:z-auto md:py-5 lg:py-5",
        scrolled && "fixed bg-white md:z-30 dark:bg-black",
      )}
    >
      <div className="cont-max-width flex justify-between">
        <Link to="/" className="self-center">
          <img src={logo} alt="logo" className="w-12 md:w-14" />
        </Link>
        {/* Side Nav button (for small screens nav) */}
        <SideNavBtn />
        {/* Large screens Navigation menu */}
        <div className="hidden items-center gap-8 md:flex">
          <nav
            className={cn(
              "mix-blend-difference",
              scrolled && "mix-blend-normal",
            )}
          >
            <ul className="flex h-full gap-6 lg:gap-8">
              {LINKS.map(({ name, to }, i) => (
                <li key={to} className="group relative h-full">
                  <Link
                    to={to}
                    className="flex h-full w-full font-semibold text-white uppercase mix-blend-difference lg:text-xl"
                  >
                    {name}
                  </Link>
                  <div className="absolute top-1/2 -right-[5px] -z-10 h-8 w-0 -translate-y-1/2 bg-white mix-blend-difference transition-[width] group-hover:-left-[5px] group-hover:w-[calc(100%+10px)]" />
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggleButton />
        </div>
      </div>
      {/* Small screens Navigation menu */}
      <SideNav />
    </header>
  );
}
