import {
  innerContent,
  searchedList,
  searchInput,
  searchInputBox,
  searchLink,
} from "@/components/search/searchInnerForm.css";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import search from "@/assets/icons/search.png";
import Image from "next/image";

const SearchInnerForm = ({ onClose }: any) => {
  const searchRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const searchEndpoint = (query: string) => `/api/search?q=${query}`;

  const onChange = useCallback((e) => {
    if (!inputRef || !inputRef.current) return;
    const query = inputRef.current.value.toLowerCase();
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.results);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <>
      <div className={innerContent}>
        <div ref={searchRef}>
          <div className={searchInputBox}>
            <div>
              <Image src={search} alt="search" />
            </div>
            `
            <input
              ref={inputRef}
              placeholder={"검색할 제목을 입력해주세요."}
              className={`${searchInput}`}
              onChange={onChange}
              onFocus={onFocus}
              value={query}
              autoFocus={true}
            />
          </div>
          {results.length > 0 && (
            <ul className={`${searchedList} `}>
              {results.map(({ id, title }: { id: string; title: string }) => (
                <Link
                  key={`${id}-${title}`}
                  href={`/${id}/article/${title.replaceAll(" ", "-")}`}
                  passHref>
                  <li onClick={onClose} className={searchLink}>
                    <a>{title}</a>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchInnerForm;
