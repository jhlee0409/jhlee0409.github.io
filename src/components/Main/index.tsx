import Head from "next/head";
import Link from "next/link";
import { main } from "./main.css";
import MainContent from "./MainContent";
import MainTop from "./MainTop";

const MainComponent = () => {
  return (
    <div className={main}>
      <Head>
        <title>JACK</title>
      </Head>
      <MainTop />
      {/* <MainContent /> */}
    </div>
  );
};

export default MainComponent;
