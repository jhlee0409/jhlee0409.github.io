import { sprinkles } from "@/styles/sprinkles.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { categoryLink, bigTitle, subSection } from "./nav.css";

const Nav = ({ categories, className, setClick }: any) => {
  const router = useRouter();
  return (
    <nav className={`${className}`}>
      {categories?.map(({ title: bigCategory, sub }: any, i: number) => {
        return (
          <div key={bigCategory + i}>
            <h2>
              <span className={bigTitle}>{bigCategory}</span>
            </h2>
            <div className={subSection}>
              {sub.map(({ title, count }: any, i: number) => {
                console.log(title);
                return (
                  <Link key={title + i} href={`/${bigCategory}-${title}`}>
                    <a
                      onClick={setClick && setClick}
                      className={`${categoryLink} ${sprinkles({
                        color:
                          router.query.categoryId === `${bigCategory}-${title}`
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
      <a href="https://hits.seeyoufarm.com">
        <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fjhlee0409%2Fjhlee0409.github.io%2Ftree%2Fgh-pages&count_bg=%23CAF1F8&title_bg=%23555555&icon=checkmarx.svg&icon_color=%23E7E7E7&title=hitss&edge_flat=false" />
      </a>
    </nav>
  );
};

export default Nav;
