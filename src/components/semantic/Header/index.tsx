import HamburgerMenu from "@/components/hamburgerMenu";
import { sprinkles } from "@/styles/sprinkles.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "../nav";
import { headerTitle, navMobile } from "../nav/nav.css";
import {
  headerStyle,
  Flex,
  innerHeaderStyle,
  rightHeaderSection,
  aboutMeBtn,
  logoMobileBox,
} from "./header.css";
import Search from "@/components/search/Search";
const Header = ({ categories }: any) => {
  const [click, setClick] = useState(true);

  const blockScroll = () => {
    if (click) {
      document.body.style.cssText = ``;
    } else {
      document.body.style.cssText = `  height: 100vh;
      overflow-y: hidden;`;
    }
  };

  useEffect(() => {
    blockScroll();
  }, [click]);

  return (
    <header className={headerStyle}>
      <div className={innerHeaderStyle}>
        <div>
          <div className={logoMobileBox}>
            <Link href={"/"}>
              <a className={headerTitle}>{`Le Jack`}</a>
            </Link>
          </div>
        </div>
        <div className={Flex}>
          <div className={rightHeaderSection}>
            <Link href={"/about"}>
              <a className={aboutMeBtn}>About me</a>
            </Link>
            <Search />
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
