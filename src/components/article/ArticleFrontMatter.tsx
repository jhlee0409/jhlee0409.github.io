import { sprinkles } from "@/styles/sprinkles.css";
import { nanoid } from "nanoid";
import { overviewWrapper, tagWrapper } from "./index.css";

const tagKey = nanoid();
const ArticleFrontMatter = ({ data }: any) => {
  const random = Math.floor(Math.random() * 10);
  return (
    <div className={`${overviewWrapper}`}>
      <p>{`${data.date}`}</p>
      <h1>{data.title}</h1>
      <div className={tagWrapper}>
        {data.tags.map((tag: any) => {
          return <span key={`${tagKey}-${tag}`}>{`#${tag}`}</span>;
        })}
      </div>
    </div>
  );
};

export default ArticleFrontMatter;
