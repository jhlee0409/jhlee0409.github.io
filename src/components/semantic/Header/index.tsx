import HamburgerMenu from "@/components/hamburgerMenu";
import { sprinkles } from "@/styles/sprinkles.css";
import Link from "next/link";
import { useState } from "react";
import Nav from "../nav";
import { headerTitle, navMobile} from "../nav/nav.css";
import {
    headerStyle,
    Flex,
    innerHeaderStyle,
    rightHeaderSection,
    progressbar,
    aboutMeBtn,
    searchBtn,logoMobileBox,
} from "./header.css";
import { useAppSelector } from "@/app/hooks";
import search from "@/assets/icons/search.png";
import Image from "next/image";
const Header = ({ categories }: any) => {
  const articleProgress = useAppSelector(
    (state) => state.articleProgress.value
  );
  const [click, setClick] = useState(true);
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

            <button className={searchBtn} type={"button"}>
              <Image src={search} alt="search" />
            </button>
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
