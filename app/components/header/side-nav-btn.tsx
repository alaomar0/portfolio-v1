import { Sling as Hamburger } from "hamburger-react";
import { useSideNav } from "./side-nav";

export default function SideNavBtn() {
  const isOpen = useSideNav((state) => state.isOpen);
  const setIsOpen = useSideNav((state) => state.setIsOpen);

  return (
    <span className="md:hidden [&>div]:scale-75 [&>div>div]:backdrop-invert-100">
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
  );
}
