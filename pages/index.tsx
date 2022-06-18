import MainComponent from "../src/components/Main";
import { getPostCategory } from "../src/helper/getPosts";

export const getStaticProps = () => {
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
