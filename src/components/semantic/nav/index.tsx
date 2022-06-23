import { sprinkles } from "@/styles/sprinkles.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { nav, categoryLink, bigTitle } from "./nav.css";

const Nav = ({ categories }: any) => {
  const router = useRouter();
  console.log(router.query.categoryId);
  return (
    <nav className={nav}>
      <h3>
        <span className={bigTitle}>TECH</span>
      </h3>
      {categories?.map(({ title, count }: any, i: number) => {
        return (
          <Link key={i} href={`/${title}`}>
            <a
              className={`${categoryLink} ${sprinkles({
                backgroundColor:
                  router.query.categoryId === title ? "gray-700" : "none",
              })}`}
            >{`${title.replace(
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
