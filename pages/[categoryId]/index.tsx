import { getPostCategory, getPosts } from "@/helper/getPosts";
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

const ArticleListPage = ({ data }: any) => {
  const router = useRouter();
  const categoryId = router.query.categoryId as string;
  return (
    <>
      <Head>
        <title>{`JACK : ${categoryId.toUpperCase()}`}</title>
      </Head>
      <ArticleList data={data} />
    </>
  );
};

export default ArticleListPage;
