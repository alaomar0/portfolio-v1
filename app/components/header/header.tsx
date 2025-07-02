import { Link } from "react-router";
import logo from "/app/assets/logo.svg";
import SideNav from "./side-nav";
import { cn } from "~/lib/utils";

export const LINKS = [
  { name: "Home", to: "/" },
  { name: "About", to: "/#about" },
  { name: "Projects", to: "/#projects" },
  { name: "Skills", to: "/#skills" },
  { name: "Contact Me", to: "/#contact" },
];

export default function Header() {
  return (
    <header className="fixed flex w-full justify-between p-4 md:px-10 md:py-5">
      <Link to="/" className="self-center">
        <img src={logo} alt="logo" className="w-10 md:w-14" />
      </Link>

      <nav className="hidden md:block">
        <ul className="flex h-full gap-7">
          {LINKS.map(({ name, to }, i) => (
            <li key={to} className="h-full">
              <Link
                to={to}
                className={cn(
                  "relative flex h-full items-center text-xl font-semibold text-black uppercase dark:text-white",
                  "duration-900 after:absolute after:top-1/2 after:right-0 after:h-6 after:w-0 after:-translate-y-1/2 after:backdrop-invert-100 after:transition-[width]",
                  "hover:after:left-0 hover:after:w-full focus:after:left-0",
                )}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <SideNav />
    </header>
  );
}
