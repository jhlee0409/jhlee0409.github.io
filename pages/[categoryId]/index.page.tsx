import { getPostCategory, getCategoryPaths, getPosts } from "@/helper/getPosts";
import dynamic from "next/dynamic";

import Head from "next/head";
import { useRouter } from "next/router";
import HeadMeta from "@/helper/HeadMeta";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const categories = getPostCategory();
  const data = getPosts(params.categoryId);
  return {
    props: {
      categories,
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = getCategoryPaths();
  return {
    paths: data.reduce((r, e) => (r.push(...e), r), []),
    fallback: false,
  };
};
const ArticleList = dynamic(() => import("@/components/article-list"));

const ArticleListPage: NextPage = ({ data }: any) => {
  const router = useRouter();
  const categoryId = router.query.categoryId as string;
  return (
    <>
      <HeadMeta title={categoryId.toUpperCase()} url={router.asPath} />
      {/*// @ts-ignore*/}
      <ArticleList data={data} />
    </>
  );
};

export default ArticleListPage;
