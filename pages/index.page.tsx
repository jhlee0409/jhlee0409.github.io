import MainComponent from "@/components/main";
import {
  getAllPost,
  getCategoryPaths,
  getPostCategory,
  getPosts,
} from "@/helper/getPosts";
import HeadMeta from "@/helper/HeadMeta";
import { GetStaticPaths, GetStaticProps } from "next";
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const categories = getPostCategory();
  const data = getAllPost();
  return {
    props: {
      categories,
      data,
    },
  };
};

export default function Home({ data }: any) {
  return (
    <>
      <HeadMeta title="" url="" />
      {/*@ts-ignore*/}
      <MainComponent data={data} />
    </>
  );
}
