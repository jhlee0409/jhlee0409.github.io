import Nav from "../semantic/nav";
import Header from "../semantic/Header";
import { contentLayout, contentWrapper } from "./layout.css";
const Layout = ({ children, categories }: any) => {
  return (
    <>
      <Header />
      <div className={contentWrapper}>
        <Nav categories={categories} />
        <main className={contentLayout}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
