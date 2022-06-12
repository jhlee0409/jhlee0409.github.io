import { micromark } from "micromark";
import { useRouter } from "next/router";
import * as acorn from "acorn";
import {
  getPost,
  getPostCategory,
  getPostPaths,
} from "../../src/helper/getPosts";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import { mdxJsx } from "micromark-extension-mdx-jsx";
import { mdx } from "micromark-extension-mdx";
import { mdxjs } from "micromark-extension-mdxjs";
import { mdxExpression } from "micromark-extension-mdx-expression";
import { mdxjsEsm } from "micromark-extension-mdxjs-esm";
import { mdxMd } from "micromark-extension-mdx-md";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toMarkdown } from "mdast-util-to-markdown";
import { mdxFromMarkdown, mdxToMarkdown } from "mdast-util-mdx";
import { gfmTagfilterHtml } from "micromark-extension-gfm-tagfilter";
import { defList, defListHtml } from "micromark-extension-definition-list";
import { gfmTable, gfmTableHtml } from "micromark-extension-gfm-table";
export const getStaticProps = async ({ params }) => {
  const categories = getPostCategory();
  const data = getPost("tech", params.articleId);
  return {
    props: {
      categories,
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getPostPaths("tech");
  return {
    paths,
    fallback: true,
  };
};

const Article = ({ data }) => {
  const router = useRouter();
  console.log(data);
  return (
    <article className="w-full">
      <main>
        <h1>{router.query.articleId}</h1>
      </main>
      <div
        className="prose  max-w-full "
        dangerouslySetInnerHTML={{
          __html: micromark(data.content, {
            allowDangerousHtml: true,
            extensions: [
              gfm(),
              mdx(),
              mdxExpression(),
              mdxjsEsm({ acorn }),
              mdxJsx(),
              mdxMd,
              defList,
              gfmTable,
            ],
            htmlExtensions: [
              gfmHtml(),
              gfmTagfilterHtml,
              defListHtml,
              gfmTableHtml,
            ],
          }),
        }}
      />
    </article>
  );
};

export default Article;
