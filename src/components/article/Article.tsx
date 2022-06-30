import Pre from "@/components/Pre";
import ReactMarkdown from "react-markdown";
import Code from "@/components/Code";

import remarkGfm from "remark-gfm";
import remarkHeadings from "remark-autolink-headings";
import remarkSlug from "remark-slug";
import remarkSmartypants from "@silvenon/remark-smartypants";
import remarkUnwrapImages from "remark-unwrap-images";

import rehypeCodeTitles from "rehype-code-titles";
import rehypeLinks from "rehype-external-links";
import remarkTableofContents from "remark-toc";
import ArticleFrontMatter from "./ArticleFrontMatter";
import { line } from "./index.css";
const Article = ({ data, content }: any) => {
  if (!content) return <span>로딩 중</span>;
  return (
    <div>
      <ArticleFrontMatter data={data} />
      <article className="markdown-body">
        <ReactMarkdown
          remarkPlugins={[
            remarkGfm,
            remarkHeadings,
            remarkSlug,
            remarkSmartypants,
            remarkUnwrapImages,
            [remarkTableofContents, { tight: true }],
          ]}
          rehypePlugins={[rehypeCodeTitles, rehypeLinks]}
          components={{
            pre: Pre,
            code: Code,
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
      <div className={line} />
      <section
        ref={(elem) => {
          if (!elem) {
            return;
          }
          const scriptElem = document.createElement("script");
          scriptElem.src = "https://utteranc.es/client.js";
          scriptElem.async = true;
          scriptElem.setAttribute("repo", "jhlee0409/jhlee0409.github.io");
          scriptElem.setAttribute("issue-term", "title");
          scriptElem.setAttribute("theme", "github-dark");
          scriptElem.setAttribute("label", "blog-comment");
          scriptElem.crossOrigin = "anonymous";
          elem.appendChild(scriptElem);
        }}
      />
    </div>
  );
};

export default Article;
