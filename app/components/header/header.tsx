import { Link } from "react-router";
import logo from "/app/assets/logo.svg";
import SideNav from "./side-nav";

export const LINKS = [
  { name: "Home", to: "/" },
  { name: "About", to: "/#about" },
  { name: "Projects", to: "/#projects" },
  { name: "Skills", to: "/#skills" },
  { name: "Contact", to: "/#contact" },
];

export default function Header() {
  return (
    <header className="absolute flex w-full justify-between p-4 md:px-14 md:py-5 lg:py-8">
      <Link to="/" className="self-center">
        <img src={logo} alt="logo" className="w-12 md:w-14 lg:w-18" />
      </Link>
      {/* Small screens Navigation menu */}
      <SideNav />

      {/* Large screens Navigation menu */}
      <nav className="hidden mix-blend-difference md:block">
        <ul className="flex h-full gap-6 lg:gap-8">
          {LINKS.map(({ name, to }, i) => (
            <li key={to} className="group relative h-full">
              <Link
                to={to}
                className="flex h-full w-full items-center text-xl font-semibold text-white uppercase mix-blend-difference lg:text-2xl"
              >
                {name}
              </Link>
              <div className="absolute top-1/2 -right-[5px] -z-10 h-8 w-0 -translate-y-1/2 bg-white transition-[width] group-hover:-left-[5px] group-hover:w-[calc(100%+10px)]" />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
