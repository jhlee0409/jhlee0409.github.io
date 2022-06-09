import Link from "next/link";
import { mainNav, rotateBox } from "./main.css.ts";
import { sprinkles } from "../../../styles/sprinkles.css.ts";
const MainNavComponent = () => {
  return (
    <aside>
      <nav className={mainNav}>
        <Link href="/tech">기술</Link>
      </nav>
    </aside>
  );
};

export default MainNavComponent;
