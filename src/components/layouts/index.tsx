import Nav from "../semantic/nav";
import Header from "../semantic/Header";

import Footer from "../semantic/Footer";
import { useAppSelector } from "@/app/hooks";
import styles from "./layout.module.scss";
import navStyles from "../semantic/nav/nav.module.scss";
import Classnames from "classnames/bind";

const cx = Classnames.bind(styles);

const Layout = ({ children, categories }: any) => {
  const isDarkTheme = useAppSelector((state) => state.isDarkTheme.value);
  const articleProgress = useAppSelector(
    (state) => state.articleProgress.value
  );
  return (
    <div
      className={cx("layoutWrapper", isDarkTheme ? "darkMode" : "lightMode")}>
      <div className={styles.progressbar}>
        <div style={{ width: `${articleProgress}%` }} />
      </div>
      <Nav categories={categories} className={navStyles.nav} />
      <div className={styles.contentWrapper}>
        <Header categories={categories} />
        <main className={styles.contentLayout}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
