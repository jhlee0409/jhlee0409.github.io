import { nanoid } from "nanoid";
import ArticleCardOverview from "../article-card-overview";

import styles from "./ArticleList.module.scss";

const articleKey = nanoid();
const ArticleList = ({ data }: any) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.articlesBox}>
        {data?.length === 0 ? (
          <div>등록된 게시물이 없습니다</div>
        ) : !data ? (
          <div>존재하지 않는 카테고리 입니다.</div>
        ) : (
          data
            ?.sort(
              // @ts-ignore
              (a: any, b: any) => new Date(b.data.date) - new Date(a.data.date)
            )
            .map(({ data: item }: any, i: number) => {
              return (
                <ArticleCardOverview
                  data={item}
                  key={`${articleKey}-${item.title}`}
                  isLast={data.length - 1 === i}
                />
              );
            })
        )}
      </div>
    </div>
  );
};

export default ArticleList;
