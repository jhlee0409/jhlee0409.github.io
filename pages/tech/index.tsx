import { nanoid } from "nanoid";
import Link from "next/link";
import { useRouter } from "next/router";
import { getPostCategory, getPosts } from "../../src/helper/getPosts";
import { wrapper, card, cardTextBox, dateBox, articlesBox } from "./index.css";

export const getStaticProps = async () => {
  const categories = getPostCategory();
  const data = getPosts("tech");

  return {
    props: {
      categories,
      data,
    },
  };
};

const tagKey = nanoid();
const articleKey = nanoid();

const Tech = ({ data }: any) => {
  const router = useRouter();
  return (
    <div className={wrapper}>
      <div className={articlesBox}>
        {data.map(({ data }: any) => {
          return (
            <Link
              passHref
              href={`${router.route}/${data.title.replaceAll(" ", "_")}`}
              key={`${articleKey}-${data.title}`}
            >
              <div className={card}>
                <div className={dateBox}>{data.date}</div>
                <div className={cardTextBox}>
                  <h2>{data.title}</h2>
                  <p>: {data.summary}</p>
                  <div>
                    {data.tags?.map((tag: any) => {
                      return <span key={`${tagKey}-${tag}`}>{`#${tag}`}</span>;
                    })}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
