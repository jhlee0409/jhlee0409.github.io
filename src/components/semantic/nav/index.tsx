import { sprinkles } from "@/styles/sprinkles.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { nav, categoryLink, bigTitle, subSection } from "./nav.css";

const Nav = ({ categories }: any) => {
  const router = useRouter();
  return (
    <nav className={nav}>
      {categories?.map(({ title: bigCategory, sub }: any, i: number) => {
        return (
          <div key={bigCategory + i}>
            <h3>
              <span className={bigTitle}>{bigCategory}</span>
            </h3>
            <div className={subSection}>
              {sub.map(({ title, count }: any, i: number) => {
                return (
                  <Link key={title + i} href={`/${bigCategory}_${title}`}>
                    <a
                      className={`${categoryLink} ${sprinkles({
                        backgroundColor:
                          router.query.categoryId === `${bigCategory}_${title}`
                            ? "gray-700"
                            : "none",
                      })}`}
                    >{`${title.replace(
                      title[0],
                      title[0].toUpperCase()
                    )} (${count})`}</a>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default Nav;
