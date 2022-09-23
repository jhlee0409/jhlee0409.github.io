import Nav from "../semantic/nav";
import Header from "../semantic/Header";
import { contentLayout, contentWrapper, LayoutWrapper } from "./layout.css";
import { nav } from "../semantic/nav/nav.css";
import Footer from "../semantic/Footer";
import { progressbar } from "@/components/semantic/Header/header.css";
import { useAppSelector } from "@/app/hooks";
import { darkTheme, lightTheme } from "@/styles/theme.css";

const Layout = ({ children, categories }: any) => {
  const isDarkTheme = useAppSelector((state) => state.isDarkTheme.value);
  const articleProgress = useAppSelector(
    (state) => state.articleProgress.value
  );
  return (
    <div className={`${LayoutWrapper} ${isDarkTheme ? darkTheme : lightTheme}`}>
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
