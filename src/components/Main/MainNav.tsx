import Link from "next/link";
import { mainNav } from "./main.css";
// import { sprinkles } from "../../src/styles/sprinkles.css.ts";
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
