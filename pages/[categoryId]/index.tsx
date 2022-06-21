import { getPostCategory, getPostPaths, getPosts } from "@/helper/getPosts";
import ArticleList from "@/components/articleList";
import Head from "next/head";
import { useRouter } from "next/router";

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

const ArticleListPage = ({ categories, data }: any) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`JACK : ${router.query.categoryId}`}</title>
      </Head>
      <ArticleList data={data} />
    </>
  );
};

export default ArticleListPage;
