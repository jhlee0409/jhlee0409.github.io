import { first, second, third, wrapper } from "./index.css";

const HamburgerMenu = ({ setClick, click }: any) => {
  return (
    <button className={wrapper} onClick={() => setClick((p: any) => !p)}>
      <div className={!click ? first : ""} />
      <div className={!click ? second : ""} />
      <div className={!click ? third : ""} />
    </button>
  );
};

export default HamburgerMenu;
