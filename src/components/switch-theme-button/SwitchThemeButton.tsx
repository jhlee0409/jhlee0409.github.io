import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { changeTheme } from "@/feature/changeThemeSlice";
import moon from "@/assets/icons/moon.png";
import sun from "@/assets/icons/sun.png";
import {
  off,
  on,
  switchThemeButton,
  themeButtonBox,
  iconImage,
  moonIcon,
  sunIcon,
} from "@/components/switch-theme-button/switchThemeButton.css";
import Image from "next/image";
const SwitchThemeButton = () => {
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector((state) => state.isDarkTheme.value);
  return (
    <div className={themeButtonBox}>
      <button
        onClick={() => dispatch(changeTheme())}
        className={`${switchThemeButton} ${isDarkTheme ? on : off}`}>
        <div className={`${iconImage} ${moonIcon}`}>
          <Image src={moon} alt="moon" />
        </div>
        <div className={`${iconImage} ${sunIcon}`}>
          <Image src={sun} alt="sun" />
        </div>
      </button>
    </div>
  );
};

export default SwitchThemeButton;
