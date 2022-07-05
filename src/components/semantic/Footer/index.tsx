import { footerBox, logoBox, logoLink } from "./footer.css";
import githubLogo from "@/assets/github.png";
import linkedinLogo from "@/assets/linkedin.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={footerBox}>
      <p>ⓒ 2022. JACK All rights reserved</p>
      <div className={logoBox}>
        <a
          className={logoLink}
          href="https://github.com/jhlee0409"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={githubLogo} alt="github" />
        </a>
        <a
          className={logoLink}
          href="https://www.linkedin.com/in/jhlee0409/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={linkedinLogo} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
