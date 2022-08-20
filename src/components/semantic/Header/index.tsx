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
  progressbar,
} from "./header.css";
import { useAppSelector } from "@/app/hooks";
const Header = ({ categories }: any) => {
  const articleProgress = useAppSelector(
    (state) => state.articleProgress.value
  );
  const [click, setClick] = useState(true);
  return (
    <header className={headerStyle}>
      <div className={innerHeaderStyle}>
        <Link href={"/"}>
          <a className={headerTitle}>{`Le Jack`}</a>
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
      <div className={progressbar}>
        <div style={{ width: `${articleProgress}%` }} />
      </div>
    </header>
  );
};

export default Header;
