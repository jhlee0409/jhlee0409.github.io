/* eslint-disable react-hooks/rules-of-hooks */
import { getPost, getPostCategory } from "@/helper/getPosts";
import Article from "@/components/article/Article";
export const getServerSideProps = ({ params }: any) => {
  const categories = getPostCategory();
  const data = getPost(params.categoryId, params.articleId);
  return {
    props: {
      categories,
      ...data,
    },
  };
};

const ArticlePage = ({ data, content }: any) => {
  return <Article data={data} content={content} />;
};

export default ArticlePage;
