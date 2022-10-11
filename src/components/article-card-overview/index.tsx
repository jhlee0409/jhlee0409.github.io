import { sprinkles } from "@/styles/sprinkles.css";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./articleCardOverview.module.scss";
import { useAppSelector } from "@/app/hooks";

interface ArticleCardOverviewType {
  data: {
    date: string;
    title: string;
    summary: string;
    tags: string[];
    mainCategory: string;
    subCategory: string;
  };
  isLast: boolean;
}

const tagKey = nanoid();
const ArticleCardOverview = ({ data, isLast }: ArticleCardOverviewType) => {
  const router = useRouter();
  const isDarkTheme = useAppSelector((state) => state.isDarkTheme.value);
  return (
    <Link
      passHref
      href={`/${
        router.query.categoryId || `${data.mainCategory}-${data.subCategory}`
      }/article/${data.title.replaceAll(" ", "-")}`}>
      <div className={styles.card}>
        <div className={styles.line}>
          <div className={styles.cardTextBox}>
            <p className={styles.dateBox}>{data.date}</p>
            <h1 className={styles.cardTitle}>{data.title}</h1>
            <p className={styles.cardSummary}>{`- ${data.summary}`}</p>
            <div className={styles.cardTagBox}>
              {data.tags?.map((tag: string, i: number) => {
                return (
                  <span
                    key={`${tagKey}-${tag}`}
                    className={`${styles.tag} ${
                      styles[
                        isDarkTheme
                          ? `rainbow-dark-${i + 1}00`
                          : `rainbow-light-${i + 1}00`
                      ]
                    }`}>{`#${tag}`}</span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ArticleCardOverview;
