import { cn } from "~/lib/utils";
import { Link } from "react-router";
import { Sling as Hamburger } from "hamburger-react";
import { create } from "zustand";

type SidNavState = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const useSideNav = create<SidNavState>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set(() => ({ isOpen: isOpen })),
}));

const LINKS = [
  { name: "Home", to: "/" },
  { name: "About", to: "/#about" },
  { name: "Projects", to: "/#projects" },
  { name: "Skills", to: "/#skills" },
  { name: "Contact Me", to: "/#contact" },
];

export default function SideNav() {
  const isOpen = useSideNav((state) => state.isOpen);
  const setIsOpen = useSideNav((state) => state.setIsOpen);

  const delay = 50;
  const difference = 20;

  return (
    <>
      {/* Side Nav button */}
      <span
        className={cn("[&>div]:scale-85", "[&>div>div]:backdrop-invert-100")}
      >
        <Hamburger
          size={38}
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
      <div
        className={cn(
          // heigth = 100dvh - header-height(48px(hamburger icon size) + 2rem (the top and bottom padding in the header))
          "absolute top-full right-0 flex h-[calc(100dvh-48px-2rem)] w-0 flex-col overflow-hidden bg-white transition-[width] duration-300 dark:bg-black",
          isOpen && "w-dvw",
        )}
        style={{
          transitionDelay: isOpen
            ? `0ms`
            : `${(LINKS.length - 1) * delay + difference}ms`,
        }}
      >
        {LINKS.map(({ name, to }, i) => {
          // Calculate the transition delay based on the index
          // When Opening, the background div will slide first, then the content div, and the transition will start from the top
          // When Closing, the content div will slide first, then the background div,  and the transition will start from the bottom

          return (
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              to={to}
              key={to}
              className="group relative block"
            >
              {/* background div */}
              <div
                className={cn(
                  "flex w-full translate-x-full items-center bg-black pl-3 transition-transform duration-300 dark:bg-white",
                  isOpen && "translate-0",
                )}
                style={{
                  transitionDelay: isOpen
                    ? `${i * delay}ms`
                    : `${(LINKS.length - i) * delay + difference}ms`,
                }}
              >
                {/* content div */}
                <div
                  className={cn(
                    "w-full translate-x-full bg-white py-6 pl-4 transition-transform duration-300 dark:bg-black",
                    isOpen && "translate-0",
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
                </div>
              </div>
            </Link>
          );
        })}
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
          {/* <button></button> */}
        </div>
      </div>
    </>
  );
}
