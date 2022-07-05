import HamburgerMenu from "@/components/hamburgerMenu";
import { sprinkles } from "@/styles/sprinkles.css";
import Link from "next/link";
import { useState } from "react";
import Nav from "../nav";
import { navMobile } from "../nav/nav.css";
import {
  headerStyle,
  headerTitle,
  Flex,
  innerHeaderStyle,
  rightHeaderSection,
} from "./header.css";
const Header = ({ categories }: any) => {
  const [click, setClick] = useState(true);
  return (
    <header className={headerStyle}>
      <div className={innerHeaderStyle}>
        <Link href={"/"}>
          <a className={headerTitle}>JACK</a>
        </Link>
        <div className={Flex}>
          <div className={rightHeaderSection}>
            <div>About me</div>
            <label htmlFor="search">search</label>
            <input name="search" type="text" />
          </div>
          <HamburgerMenu setClick={setClick} click={click} />
        </div>
      </div>
      <Nav
        setClick={setClick}
        categories={categories}
        className={`${navMobile} ${sprinkles({
          transform: {
            mobile: click ? "translateX(-100%)" : "translateX(0)",
          },
        })}`}
      />
    </header>
  );
};

export default Header;
