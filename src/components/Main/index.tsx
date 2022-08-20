import HeadMeta from "@/helper/HeadMeta";
import Head from "next/head";
import { main } from "./main.css";
import MainContent from "./MainContent";
import MainTop from "./MainTop";

const MainComponent = () => {
  return (
    <div className={main}>
      <HeadMeta title="" />
      <MainTop />
      {/* <MainContent /> */}
    </div>
  );
};

export default MainComponent;
