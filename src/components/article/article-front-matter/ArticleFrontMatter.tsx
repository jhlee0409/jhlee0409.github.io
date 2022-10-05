import { nanoid } from "nanoid";
import styles from "./ArticleFrontMatter.module.scss";
const tagKey = nanoid();
const ArticleFrontMatter = ({ data }: any) => {
  const random = Math.floor(Math.random() * 10);
  return (
    <div className={`${styles.overviewWrapper}`}>
      <p>{`${data.date}`}</p>
      <h1>{data.title}</h1>
      <div className={styles.tagWrapper}>
        {data.tags.map((tag: any) => {
          return <span key={`${tagKey}-${tag}`}>{`#${tag}`}</span>;
        })}
      </div>
    </div>
  );
};

export default ArticleFrontMatter;
