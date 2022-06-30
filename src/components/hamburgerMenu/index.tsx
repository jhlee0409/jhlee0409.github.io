import { wrapper } from "./index.css";

const HamburgerMenu = ({ setClick }: any) => {
  return (
    <button className={wrapper} onClick={() => setClick((p: any) => !p)}>
      <div />
      <div />
      <div />
    </button>
  );
};

export default HamburgerMenu;
