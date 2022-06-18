/* eslint-disable react-hooks/rules-of-hooks */
import {
  getPost,
  getPostCategory,
  getPostPaths,
} from "../../src/helper/getPosts";
import Article from "../../src/components/article/Article";
export const getStaticProps = ({ params }: any) => {
  const categories = getPostCategory();
  const data = getPost("tech", params.articleId);
  return {
    props: {
      categories,
      ...data,
    },
  };
};
export const getStaticPaths = () => {
  const paths = getPostPaths("tech");
  return {
    paths,
    fallback: true,
  };
};

const ArticlePage = ({ data, content }: any) => {
  return <Article data={data} content={content} />;
};

export default ArticlePage;
