import Nav from "../semantic/nav";
import Header from "../semantic/Header";
import { contentLayout, contentWrapper, LayoutWrapper } from "./layout.css";
import { nav } from "../semantic/nav/nav.css";
import Footer from "../semantic/Footer";

const Layout = ({ children, categories }: any) => {
  return (
    <div className={LayoutWrapper}>
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
