import HeadMeta from "@/helper/HeadMeta";
import MainTop from "./MainTop/MainTop";
import ArticleList from "@/components/article-list";

const MainComponent = ({ data }: any) => {
  return (
    <div>
      <HeadMeta title="" />
      <MainTop />
      <ArticleList data={data} />
    </div>
  );
};

export default MainComponent;
