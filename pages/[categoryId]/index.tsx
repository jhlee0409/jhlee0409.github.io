import { getPostCategory, getPostPaths, getPosts } from "@/helper/getPosts";
import ArticleList from "@/components/articleList";

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
  return <ArticleList data={data} />;
};

export default ArticleListPage;
