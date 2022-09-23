import { sprinkles } from "@/styles/sprinkles.css";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  card,
  cardTextBox,
  dateBox,
  cardTagBox,
  cardTitle,
  cardSummary,
  line,
  layout,
} from "./index.css";

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
  return (
    <Link
      passHref
      href={`/${
        router.query.categoryId || `${data.mainCategory}-${data.subCategory}`
      }/article/${data.title.replaceAll(" ", "-")}`}>
      <div className={layout}>
        <div className={card}>
          <div className={line}>
            <div className={cardTextBox}>
              <p className={dateBox}>{data.date}</p>
              <h1 className={cardTitle}>{data.title}</h1>
              <p className={cardSummary}>{`- ${data.summary}`}</p>
              <div className={cardTagBox}>
                {data.tags?.map((tag: string, i: number) => {
                  return (
                    <span
                      key={`${tagKey}-${tag}`}
                      className={sprinkles({
                        color: `rainbow-${i + 1}00`,
                      })}>{`#${tag}`}</span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/*{!isLast && <span />}*/}
      </div>
    </Link>
  );
};
export default ArticleCardOverview;