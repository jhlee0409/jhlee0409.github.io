import MainComponent from "@/components/Main";
import { getPostCategory } from "@/helper/getPosts";

export const getServerSideProps = () => {
  const categories = getPostCategory();
  return {
    props: {
      categories,
    },
  };
};

export default function Home() {
  return <MainComponent />;
}
