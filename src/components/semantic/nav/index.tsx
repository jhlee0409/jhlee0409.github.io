import { sprinkles } from "@/styles/sprinkles.css";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  categoryLink,
  bigTitle,
  subSection,
  headerTitle,
  headerBox,
} from "./nav.css";

const Nav = ({ categories, className, setClick }: any) => {
  const router = useRouter();
  return (
    <div>
      <nav className={`${className}`}>
        <div className={headerBox}>
          <Link href={"/"}>
            <a className={headerTitle}>{`Le Jack`}</a>
          </Link>
        </div>
        {categories?.map(({ title: bigCategory, sub }: any, i: number) => {
          return (
            <div key={bigCategory + i}>
              <h3>
                <span className={bigTitle}>{bigCategory}</span>
              </h3>
              <div className={subSection}>
                {sub.map(({ title, count }: any, i: number) => {
                  return (
                    <Link key={title + i} href={`/${bigCategory}-${title}`}>
                      <a
                        onClick={setClick && setClick}
                        className={`${categoryLink} ${sprinkles({
                          color:
                            router.query.categoryId ===
                            `${bigCategory}-${title}`
                              ? "point"
                              : "none",
                        })}`}>{`${title
                        .replace(title[0], title[0].toUpperCase())
                        .replaceAll("_", " ")} (${count})`}</a>
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
    </div>
  );
};

export default Nav;
