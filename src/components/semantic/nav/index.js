import Link from "next/link";
import { nav } from "./nav.css.ts";

const Nav = ({ categories }) => {
  return (
    <nav className={nav}>
      {categories?.map((item, i) => {
        return (
          <Link key={i} href={`/${item}`}>
            <a>{`${item}`}</a>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
