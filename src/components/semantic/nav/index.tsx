import { sprinkles } from "@/styles/sprinkles.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { nav, categoryLink, bigTitle, subSection } from "./nav.css";

const Nav = ({ categories, className }: any) => {
  const router = useRouter();
  return (
    <nav className={`${nav} ${className}`}>
      {categories?.map(({ title: bigCategory, sub }: any, i: number) => {
        return (
          <div key={bigCategory + i}>
            <h2>
              <span className={bigTitle}>{bigCategory}</span>
            </h2>
            <div className={subSection}>
              {sub.map(({ title, count }: any, i: number) => {
                return (
                  <Link key={title + i} href={`/${bigCategory}-${title}`}>
                    <a
                      className={`${categoryLink} ${sprinkles({
                        color:
                          router.query.categoryId === `${bigCategory}-${title}`
                            ? "point"
                            : "none",
                      })}`}
                    >{`${title.replace(
                      title[0],
                      title[0].toUpperCase()
                    )} (${count})`}</a>
                  </Link>
                );
              })}
              {sub.length === 0 && (
                <div className={subSection}>
                  <p>No Category</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default Nav;
