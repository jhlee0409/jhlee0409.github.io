import { nanoid } from "nanoid";
import { tagWrapper, overviewWrapper } from "./index.css";
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

const Article = ({ data, content }: any) => {
  if (!content) return <span>로딩 중</span>;
  const tagKey = nanoid();
  return (
    <div>
      <div className={overviewWrapper}>
        <h1>{data.title}</h1>
        <p>{data.date}</p>
        <div className={tagWrapper}>
          {data.tags.map((tag: any) => {
            return <span key={`${tagKey}-${tag}`}>{`#${tag}`}</span>;
          })}
        </div>
      </div>
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
    </div>
  );
};

export default Article;
