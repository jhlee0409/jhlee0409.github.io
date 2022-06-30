import Nav from "../semantic/nav";
import Header from "../semantic/Header";
import { contentLayout, contentWrapper } from "./layout.css";
import { useState } from "react";
import { sprinkles } from "@/styles/sprinkles.css";

const Layout = ({ children, categories }: any) => {
  const [click, setClick] = useState(true);
  return (
    <>
      <Header setClick={setClick} />
      <div className={contentWrapper}>
        <Nav
          categories={categories}
          className={sprinkles({
            display: click ? "flex" : "none",
          })}
        />
        <main className={contentLayout}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
