import styles from "./hamburgerMenu.module.scss";
import Classnames from "classnames/bind";

const cx = Classnames.bind(styles);

const HamburgerMenu = ({ setClick, click }: any) => {
  return (
    <button
      className={cx("menuBox", !click && "isOpen")}
      onClick={() => setClick((p: any) => !p)}>
      <div />
      <div />
      <div />
    </button>
  );
};

export default HamburgerMenu;
