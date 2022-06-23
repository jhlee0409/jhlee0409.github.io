import Link from "next/link";
import { nav, categoryLink, bigTitle } from "./nav.css";

const Nav = ({ categories }: any) => {
  return (
    <nav className={nav}>
      <h3 className={bigTitle}>CATEGORY</h3>
      {categories?.map(({ title, count }: any, i: number) => {
        return (
          <Link key={i} href={`/${title}`}>
            <a className={categoryLink}>{`${title.replace(
              title[0],
              title[0].toUpperCase()
            )} (${count})`}</a>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
