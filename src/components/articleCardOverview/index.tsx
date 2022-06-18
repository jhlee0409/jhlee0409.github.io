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
} from "./index.css";

const tagKey = nanoid();
const ArticleCardOverview = ({ data }: any) => {
  const router = useRouter();
  return (
    <Link
      passHref
      href={`${router.query.categoryId}/article/${data.title.replaceAll(
        " ",
        "_"
      )}`}
    >
      <div className={card}>
        <div className={dateBox}>{data.date}</div>
        <div className={cardTextBox}>
          <h2 className={cardTitle}>{data.title}</h2>
          <p className={cardSummary}>{data.summary}</p>
          <div className={cardTagBox}>
            {data.tags?.map((tag: any) => {
              return <span key={`${tagKey}-${tag}`}>{`#${tag}`}</span>;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ArticleCardOverview;
