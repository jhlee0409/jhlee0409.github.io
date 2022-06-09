import Link from "next/link";
import { nav } from "./nav.css.ts";

const arr = ["tech", "algorithm"];

const Nav = () => {
  return (
    <nav className={nav}>
      {arr.map((item, i) => {
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
