/* eslint-disable react-hooks/rules-of-hooks */
import { getPost, getPostCategory, getPostPaths } from "@/helper/getPosts";
import Article from "@/components/article/Article";
import HeadMeta from "@/helper/HeadMeta";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next";
export const getStaticProps = ({ params }: any) => {
  const categories = getPostCategory();
  const data = getPost(params.categoryId, params.articleId);
  return {
    props: {
      categories,
      ...data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = getPostPaths();
  return {
    paths: data,
    fallback: false,
  };
};

const ArticlePage = ({ data, content }: any) => {
  const router = useRouter();
  return (
    <>
      <HeadMeta title={data.title} url={router.asPath} />
      <Article data={data} content={content} />
    </>
  );
};

export default ArticlePage;
