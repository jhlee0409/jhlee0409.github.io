/* eslint-disable react-hooks/rules-of-hooks */
import { getPost, getPostCategory } from "@/helper/getPosts";
import Article from "@/components/article/Article";
import HeadMeta from "@/helper/HeadMeta";
import { useRouter } from "next/router";
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
  const router = useRouter();

  return (
    <>
      <HeadMeta title={data.title} url={router.asPath} />
      <Article data={data} content={content} />
    </>
  );
};

export default ArticlePage;
