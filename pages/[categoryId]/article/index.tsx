import { getPostCategory, getPosts } from "@/helper/getPosts";
import ArticleList from "@/components/articleList";

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

const ArticleListPage = ({ data }: any) => {
  return <ArticleList data={data} />;
};

export default ArticleListPage;
