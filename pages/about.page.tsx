import HeadMeta from "@/helper/HeadMeta";
import About from "@/components/about/About";
import { getPostCategory } from "@/helper/getPosts";

export const getStaticProps = () => {
  const categories = getPostCategory();
  return {
    props: {
      categories,
    },
  };
};

const AboutPage = () => {
  return (
    <>
      <HeadMeta title="About me" />
      <About />
    </>
  );
};

export default AboutPage;
