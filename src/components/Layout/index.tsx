import Nav from "../semantic/nav";
import Header from "../semantic/Header";
import { contentLayout, contentWrapper } from "./layout.css";
import { nav } from "../semantic/nav/nav.css";
import Footer from "../semantic/Footer";

const Layout = ({ children, categories }: any) => {
  return (
    <>
      <Header categories={categories} />
      <div className={contentWrapper}>
        <Nav categories={categories} className={nav} />
        <main className={contentLayout}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
