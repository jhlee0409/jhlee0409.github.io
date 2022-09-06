import HeadMeta from "@/helper/HeadMeta";
import Head from "next/head";
import { main } from "./main.css";
import MainContent from "./MainContent";
import MainTop from "./MainTop";
import ArticleList from "@/components/articleList";

const MainComponent = ({ data }: any) => {
  return (
    <div className={main}>
      <HeadMeta title="" />
      <MainTop />
      <ArticleList data={data} />
    </div>
  );
};

export default MainComponent;
