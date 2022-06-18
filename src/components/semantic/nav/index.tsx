import Link from "next/link";
import { nav } from "./nav.css";

const Nav = ({ categories }: any) => {
  return (
    <nav className={nav}>
      {categories?.map((item: any, i: number) => {
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
