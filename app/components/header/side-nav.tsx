import { cn } from "~/lib/utils";
import { Link } from "react-router";
import { Sling as Hamburger } from "hamburger-react";
import { create } from "zustand";
import { LINKS } from "./header";
import ThemeToggleButton from "./theme-toggle-btn";

type SidNavState = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const useSideNav = create<SidNavState>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set(() => ({ isOpen: isOpen })),
}));

export default function SideNav() {
  const isOpen = useSideNav((state) => state.isOpen);
  const setIsOpen = useSideNav((state) => state.setIsOpen);

  const delay = 50;
  const difference = 20;

  return (
    <>
      {/* Side Nav button */}
      <span
        className={cn(
          "md:hidden",
          "[&>div]:scale-75",
          "[&>div>div]:backdrop-invert-100",
        )}
      >
        <Hamburger
          hideOutline={false}
          size={48}
          distance="sm"
          label="Show navigation"
          color="none"
          toggled={isOpen}
          toggle={(value) =>
            typeof value === "function"
              ? setIsOpen(value(isOpen))
              : setIsOpen(value)
          }
        />
      </span>

      {/* Side Nav */}
      <nav
        className={cn(
          // heigth = 100dvh - header-height(48px(hamburger icon size) + 2rem (the top and bottom padding in the header))
          "absolute top-full right-0 z-30 flex h-[calc(100dvh-48px-2rem)] w-0 flex-col overflow-hidden bg-white transition-[width] duration-300 md:hidden dark:bg-black",
          isOpen && "w-dvw",
        )}
        style={{
          transitionDelay: isOpen
            ? `0ms`
            : `${(LINKS.length - 1) * delay + difference}ms`,
        }}
      >
        <ul>
          {LINKS.map(({ name, to }, i) => {
            // Calculate the transition delay based on the index
            // When Opening, the li element will slide first, then the Link component, and the transition will start from the top
            // When Closing, the Link component will slide first, then the li element,  and the transition will start from the bottom

            return (
              <li
                key={to}
                className={cn(
                  "group",
                  "flex w-full translate-x-full items-center bg-black pl-3 transition-transform duration-300 dark:bg-white",
                  isOpen && "translate-0",
                )}
                style={{
                  transitionDelay: isOpen
                    ? `${i * delay}ms`
                    : `${(LINKS.length - i) * delay + difference}ms`,
                }}
              >
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  to={to}
                  className={cn(
                    "w-full translate-x-full bg-white py-6 pl-4 transition-transform duration-300 dark:bg-black",
                    isOpen && "translate-0",
                    "after:absolute after:top-1/2 after:left-0 after:h-12 after:w-0 after:-translate-y-1/2 after:backdrop-invert-100 after:transition-[width]",
                    "hover:after:w-20",
                  )}
                  style={{
                    transitionDelay: isOpen
                      ? `${i * delay + difference}ms`
                      : `${(LINKS.length - i) * delay}ms`,
                  }}
                >
                  <span className="block text-lg font-semibold whitespace-nowrap text-black uppercase transition-transform duration-100 ease-linear group-hover:translate-x-1.5 dark:text-white">
                    {name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className={cn(
            "grow translate-x-full py-6 pl-7 transition-transform duration-300",
            isOpen && "translate-0",
          )}
          style={{
            transitionDelay: isOpen
              ? `${LINKS.length * delay + difference}ms`
              : `0ms`,
          }}
        >
          {/* Dark/Light mode switch */}
          <ThemeToggleButton />
        </div>
      </nav>
    </>
  );
}
