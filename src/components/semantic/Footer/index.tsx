import { footerBox, logoBox, logoLink } from "./footer.css";
import githubLogo from "@/assets/github.png";
import linkedinLogo from "@/assets/linkedin.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={footerBox}>
      <p>ⓒ 2022. Le Jack All rights reserved</p>
    </div>
  );
};

export default Footer;
