import Link from "next/link";
import { useRouter } from "next/router";
import { getPostCategory, getPosts } from "../../src/helper/getPosts";
import {
  wrapper,
  card,
  cardTextBox,
  dateBox,
  articlesBox,
} from "./index.css.ts";

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

const Tech = ({ data }) => {
  const router = useRouter();
  return (
    <div className={wrapper}>
      <div className={articlesBox}>
        {data.map(({ data, content }, i) => {
          return (
            <Link passHref href={`${router.route}/${data.title}`} key={i}>
              <div className={card}>
                <div className={dateBox}>{data.date}</div>
                <div className={cardTextBox}>
                  <p>{data.title}</p>
                  <p>{data.preview}</p>
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
