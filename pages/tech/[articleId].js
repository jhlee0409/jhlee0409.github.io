/* eslint-disable react-hooks/rules-of-hooks */
import {
  getPost,
  getPostCategory,
  getPostPaths,
} from "../../src/helper/getPosts";

import { nanoid } from "nanoid";
import { tagWrapper, overviewWrapper } from "./article.css";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Pre from "../../src/components/Pre";

export const getStaticProps = async ({ params }) => {
  const categories = getPostCategory();
  const data = await getPost("tech", params.articleId);
  return {
    props: {
      categories,
      ...data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getPostPaths("tech");
  return {
    paths,
    fallback: true,
  };
};

const tagKey = nanoid();
const Article = ({ code, frontmatter }) => {
  if (!code) return <span>none</span>;
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <div>
      <div className={overviewWrapper}>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <div className={tagWrapper}>
          {frontmatter.tags.map((tag) => {
            return <span key={`${tagKey}-${tag}`}>{`#${tag}`}</span>;
          })}
        </div>
      </div>
      <article className="w-full relative  prose dark:prose-invert max-w-full">
        <Component components={{ pre: Pre }} />
      </article>
    </div>
  );
};

export default Article;
