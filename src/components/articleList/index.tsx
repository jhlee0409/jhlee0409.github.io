import { nanoid } from "nanoid";
import ArticleCardOverview from "../articleCardOverview";
import { articlesBox, wrapper } from "./index.css";
const articleKey = nanoid();

const ArticleList = ({ data }: any) => {
  return (
    <div className={wrapper}>
      <div className={articlesBox}>
        {data?.length === 0 ? (
          <div>등록된 게시물이 없습니다</div>
        ) : (
          data?.map(({ data }: any) => {
            return (
              <ArticleCardOverview
                data={data}
                key={`${articleKey}-${data.title}`}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default ArticleList;
