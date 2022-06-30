import MainComponent from "@/components/Main";
import { getPostCategory } from "@/helper/getPosts";
import HeadMeta from "@/helper/HeadMeta";

export const getStaticProps = () => {
  const categories = getPostCategory();
  return {
    props: {
      categories,
    },
  };
};

export default function Home() {
  return (
    <>
      <HeadMeta title="" url="" />
      <MainComponent />
    </>
  );
}
