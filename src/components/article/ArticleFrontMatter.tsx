import { sprinkles } from "@/styles/sprinkles.css";
import { nanoid } from "nanoid";
import { overviewWrapper, tagWrapper } from "./index.css";

const tagKey = nanoid();
const ArticleFrontMatter = ({ data }: any) => {
  const random = Math.floor(Math.random() * 10);
  return (
    <div
      className={`${overviewWrapper} ${sprinkles({
        backgroundColor: `rainbow-${random === 0 ? 1 : random}00`,
      })}`}
    >
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div className={tagWrapper}>
        {data.tags.map((tag: any) => {
          return <span key={`${tagKey}-${tag}`}>{`#${tag}`}</span>;
        })}
      </div>
    </div>
  );
};

export default ArticleFrontMatter;
