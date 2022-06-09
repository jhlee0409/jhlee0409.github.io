import Nav from "../semantic/nav";
import Header from "../semantic/Header";
import { contentLayout, contentWrapper } from "./layout.css.ts";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={contentWrapper}>
        <Nav />
        <main className={contentLayout}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
