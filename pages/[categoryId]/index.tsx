import { getPostCategory, getPosts } from "@/helper/getPosts";
import ArticleList from "@/components/articleList";
import Head from "next/head";
import { useRouter } from "next/router";
import HeadMeta from "@/helper/HeadMeta";

export const getServerSideProps = async ({ params }: any) => {
  const categories = getPostCategory();
  const data = getPosts(params.categoryId);
  return {
    props: {
      categories,
      data,
    },
  };
};

const ArticleListPage = ({ data }: any) => {
  const router = useRouter();
  const categoryId = router.query.categoryId as string;
  return (
    <>
      <HeadMeta title={categoryId.toUpperCase()} url={router.asPath} />
      <ArticleList data={data} />
    </>
  );
};

export default ArticleListPage;
