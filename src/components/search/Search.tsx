import Portal from "@/components/portal/Portal";
import Image from "next/image";
import search from "@/assets/icons/search.png";
import { searchBtn } from "@/components/search/search.css";

import SearchInnerForm from "@/components/search/SearchInnerForm";

const Search = () => {
  return (
    <Portal
      openComponent={(props: any) => {
        return (
          <button className={searchBtn} type={"button"} {...props}>
            <Image src={search} alt="search" />
          </button>
        );
      }}
      render={(props: any) => <SearchInnerForm {...props} />}
    />
  );
};

export default Search;
