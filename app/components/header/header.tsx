import { Link } from "react-router";
import logo from "/app/assets/logo.svg";
import SideNav from "./side-nav";

export default function Header() {
  return (
    <header className="fixed flex w-full items-center justify-between p-4">
      <Link to="/">
        <img src={logo} alt="logo" width={40} />
      </Link>

      <SideNav />
    </header>
  );
}
