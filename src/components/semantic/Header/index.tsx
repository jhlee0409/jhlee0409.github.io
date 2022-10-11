import HamburgerMenu from "@/components/hamburger-menu";
import { sprinkles } from "@/styles/sprinkles.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "../nav";
import styles from "./header.module.scss";
import navStyles from "../nav/nav.module.scss";
import Search from "@/components/search/Search";
import SwtichThemeButton from "@/components/switch-theme-button/SwitchThemeButton";
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
    <header className={styles.headerStyle}>
      <div className={styles.innerHeaderStyle}>
        <div>
          <div className={styles.logoMobileBox}>
            <Link href={"/"}>
              <a
                className={navStyles.headerTitle}
                onClick={() => setClick(true)}>{`Le Jack`}</a>
            </Link>
          </div>
        </div>
        <div className={styles.rightHeaderSection}>
          <div className={styles.rightInnerBox}>
            <Link href={"/about"}>
              <a className={styles.aboutMeButton}>About me</a>
            </Link>
            <Search closeMobileMenu={() => setClick(true)} />
          </div>
          <SwtichThemeButton />
          <HamburgerMenu setClick={setClick} click={click} />
        </div>
      </div>
      <Nav
        setClick={setClick}
        categories={categories}
        className={`${navStyles.navMobile} ${sprinkles({
          transform: {
            mobile: click ? "translateX(-100%)" : "translateX(0)",
          },
        })}`}
      />
    </header>
  );
};

export default Header;
