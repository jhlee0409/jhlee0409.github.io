import Nav from "../semantic/nav";
import Header from "../semantic/Header";
import { contentLayout, contentWrapper, LayoutWrapper } from "./layout.css";
import { nav } from "../semantic/nav/nav.css";
import Footer from "../semantic/Footer";
import {progressbar} from "@/components/semantic/Header/header.css";
import {useAppSelector} from "@/app/hooks";

const Layout = ({ children, categories }: any) => {
    const articleProgress = useAppSelector(
        (state) => state.articleProgress.value
    );
  return (
    <div className={LayoutWrapper}>
        <div className={progressbar}>
            <div style={{ width: `${articleProgress}%` }} />
        </div>
      <Nav categories={categories} className={nav} />
      <div className={contentWrapper}>
        <Header categories={categories} />
        <main className={contentLayout}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
