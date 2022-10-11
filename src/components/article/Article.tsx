import Pre from "@/components/markdown/pre";
import ReactMarkdown from "react-markdown";
import Code from "@/components/markdown/code/Code";

import remarkGfm from "remark-gfm";
import remarkHeadings from "remark-autolink-headings";
import remarkSlug from "remark-slug";
import remarkSmartypants from "@silvenon/remark-smartypants";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeKatex from "rehype-katex";

import rehypeCodeTitles from "rehype-code-titles";
import rehypeLinks from "rehype-external-links";
import remarkTableofContents from "remark-toc";
import ArticleFrontMatter from "./article-front-matter/ArticleFrontMatter";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { checkProgress } from "@/feature/articleProgressSlice";
import ImageComponent from "@/components/markdown/Img/Img";
import TableOfContents from "@/components/semantic/table-of-contents/TableOfContents";
import {
  H1Component,
  H2Component,
  H3Component,
  H4Component,
} from "@/components/markdown/head-tag/headTag";
import styles from "./Article.module.scss";
const Article = ({ data, content }: any) => {
  const articleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef(null);
  const dispatch = useAppDispatch();
  const handleCheckProgress = () => {
    if (!articleRef.current || !articleRef) return;
    const { top, bottom, x } =
      //@ts-ignore
      articleRef.current.getBoundingClientRect();
    const progress = +(
      (window.scrollY /
        (bottom - top - (window.innerHeight - 90 - window.innerHeight * 0.1))) *
      100
    ).toFixed(2);
    dispatch(checkProgress(progress <= 100 ? progress : 100));
  };

  useEffect(() => {
    if (!articleRef.current || !articleRef) return;

    articleRef.current?.addEventListener("scroll", handleCheckProgress);
    return () => {
      if (!articleRef.current || !articleRef) return;
      articleRef.current.removeEventListener("scroll", handleCheckProgress);
      dispatch(checkProgress(0));
    };
  }, []);
  if (!content) return <span>로딩 중</span>;
  return (
    <div>
      <div>
        <div ref={articleRef}>
          <ArticleFrontMatter data={data} />
          <article
            className={`${styles.markdownArticle} markdown-body`}
            ref={contentRef}>
            <ReactMarkdown
              remarkPlugins={[
                remarkGfm,
                remarkHeadings,
                remarkSlug,
                remarkSmartypants,
                remarkUnwrapImages,
                [remarkTableofContents, { tight: true }],
              ]}
              rehypePlugins={[rehypeCodeTitles, rehypeLinks, rehypeKatex]}
              components={{
                pre: Pre,
                code: Code,
                img: ImageComponent,
                h1: H1Component,
                h2: H2Component,
                h3: H3Component,
                h4: H4Component,
              }}>
              {content}
            </ReactMarkdown>
          </article>
        </div>
        <div className={styles.line} />
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
      {/*<TableOfContents />*/}
    </div>
  );
};

export default Article;
