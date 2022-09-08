import Portal from "@/components/portal/Portal";
import Image from "next/image";
import search from "@/assets/icons/search.png";
import { searchBtn, innerContent } from "@/components/search/search.css";

const Search = () => {
  return (
    <Portal
      button={
        <button className={searchBtn} type={"button"}>
          <Image src={search} alt="search" />
        </button>
      }>
      <div className={innerContent}>
        <div>
          <input placeholder={"입력해주세요"} />
        </div>
        <div></div>
      </div>
    </Portal>
  );
};

export default Search;
