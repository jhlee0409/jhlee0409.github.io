import { sprinkles } from "@/styles/sprinkles.css";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  categoryLink,
  bigTitle,
  subSection,
  headerTitle,
  headerBox,
  logoBox,
  logoLink,
  innerNav,
  mobileInteractionBox,
} from "./nav.css";

import Image from "next/image";
import githubLogo from "@/assets/github.png";
import linkedinLogo from "@/assets/linkedin.png";
import Search from "@/components/search/Search";

const Nav = ({ categories, className, setClick }: any) => {
  const router = useRouter();

  return (
    <div>
      <div className={`${className}`}>
        <div>
          <div className={headerBox}>
            <Link href={"/"}>
              <a className={headerTitle}>{`Le Jack`}</a>
            </Link>
          </div>
          <div className={mobileInteractionBox}>
            <Search closeMobileMenu={() => setClick && setClick(true)} />
          </div>
          <div className={logoBox}>
            <a
              className={logoLink}
              href="https://github.com/jhlee0409"
              target="_blank"
              rel="noreferrer">
              <Image src={githubLogo} alt="github" />
            </a>
            <a
              className={logoLink}
              href="https://www.linkedin.com/in/jhlee0409/"
              target="_blank"
              rel="noreferrer">
              <Image src={linkedinLogo} alt="linkedin" />
            </a>
          </div>
        </div>
        <nav className={innerNav}>
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
                          onClick={() => setClick && setClick(true)}
                          className={`${categoryLink} ${sprinkles({
                            color:
                              router.query.categoryId ===
                              `${bigCategory}-${title}`
                                ? "point"
                                : "none",
                            fontWeight:
                              router.query.categoryId ===
                              `${bigCategory}-${title}`
                                ? "bold"
                                : "normal",
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
    </div>
  );
};

export default Nav;
