import { wrapper } from "./tableOfContents.css";
import { useEffect, useState } from "react";

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  const getNestedHeadings = (headingElements: any) => {
    const nestedHeadings: any[] = [];

    headingElements.forEach((heading: any, index: any) => {
      const { innerText: title, id } = heading;
      if (!title) return;
      if (heading.nodeName === "H1") {
        nestedHeadings.push({ id, title, items: [] });
      } else if (heading.nodeName === "H2" && nestedHeadings.length > 0) {
        nestedHeadings[nestedHeadings.length - 1].items.push({
          id,
          title,
        });
      }
    });

    return nestedHeadings;
  };

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h1, h2, h3, h4")
    );
    const newNestedHeadings = getNestedHeadings(headingElements);
    newNestedHeadings.shift();
    // @ts-ignore
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

const Headings = ({ headings }: any) => (
  <ul>
    {headings.map((heading: any) => (
      <li key={heading.id}>
        <a
          href={`#${heading.title}`}
          onClick={(e) => {
            e.preventDefault();
            // @ts-ignore
            document?.querySelector(`#${heading.id}`).scrollIntoView({
              behavior: "smooth",
            });
          }}>
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child: any) => (
              <li key={child.id}>
                <a
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    // @ts-ignore
                    document?.querySelector(`#${child.id}`).scrollIntoView({
                      behavior: "smooth",
                    });
                  }}>
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

const TableOfContents = () => {
  const { nestedHeadings } = useHeadingsData();
  return (
    <nav aria-label="Table of contents" className={wrapper}>
      <Headings headings={nestedHeadings} />
    </nav>
  );
};

export default TableOfContents;
