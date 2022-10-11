import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { changeTheme } from "@/feature/changeThemeSlice";
import moon from "@/assets/icons/moon.png";
import sun from "@/assets/icons/sun.png";
import styles from "./switchThemeButton.module.scss";
import Image from "next/image";
import Classnames from "classnames/bind";
const cx = Classnames.bind(styles);

const SwitchThemeButton = () => {
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector((state) => state.isDarkTheme.value);
  return (
    <div className={styles.themeButtonBox}>
      <button
        onClick={() => dispatch(changeTheme())}
        className={cx(
          "switchThemeButton",
          isDarkTheme ? "isDarkTheme" : "isLightTHeme"
        )}>
        <div className={cx("iconImage", "darkThemeIcon")}>
          <Image src={moon} alt="moon" />
        </div>
        <div className={cx("iconImage", "lightThemeIcon")}>
          <Image src={sun} alt="sun" />
        </div>
      </button>
    </div>
  );
};

export default SwitchThemeButton;
