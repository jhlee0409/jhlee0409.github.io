import Link from "next/link";
import { nav, categoryLink } from "./nav.css";

const Nav = ({ categories }: any) => {
  return (
    <nav className={nav}>
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
