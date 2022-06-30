import HamburgerMenu from "@/components/hamburgerMenu";
import Link from "next/link";
import { headerStyle, headerTitle, Flex, innerHeaderStyle } from "./header.css";

const Header = ({ setClick }: any) => {
  return (
    <header className={headerStyle}>
      <div className={innerHeaderStyle}>
        <Link href={"/"}>
          <a className={headerTitle}>JACK</a>
        </Link>
        <div className={Flex}>
          <div>About me</div>
          <label htmlFor="search">search</label>
          <input name="search" type="text" />
          <HamburgerMenu setClick={setClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
