import Link from "next/link";
import MainNavComponent from "./MainNav";
import { main } from "./main.css.ts";
import MainContent from "./MainContent";
import MainTop from "./MainTop";

const MainComponent = () => {
  return (
    <div className={main}>
      <MainTop />
      <MainContent />
      <MainNavComponent />
    </div>
  );
};

export default MainComponent;
