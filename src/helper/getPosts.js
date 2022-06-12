import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import { mdxJsx } from "micromark-extension-mdx-jsx";
import * as acorn from "acorn";
import { gfmTableFromMarkdown, gfmTableToMarkdown } from "mdast-util-gfm-table";

import { mdx } from "micromark-extension-mdx";
import { mdxjs } from "micromark-extension-mdxjs";
import { mdxExpression } from "micromark-extension-mdx-expression";
import { mdxjsEsm } from "micromark-extension-mdxjs-esm";
import { mdxMd } from "micromark-extension-mdx-md";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toMarkdown } from "mdast-util-to-markdown";
import { mdxFromMarkdown, mdxToMarkdown } from "mdast-util-mdx";
import { gfmTable, gfmTableHtml } from "micromark-extension-gfm-table";

const files = fs.readdirSync(path.join("pages"));

export const getPostCategory = () => {
  return files.filter((i) => i.search(/.js|.jsx|.ts|.tsx/g) === -1);
};

export const getPost = (folder, id) => {
  const { data, content } = matter(
    fs.readFileSync(path.join(`posts/${folder}/${id}.mdx`), "utf8")
  );
  const out = toMarkdown(
    fromMarkdown(content, {
      extensions: [mdxjs(), gfmTable],
      mdastExtensions: [mdxFromMarkdown(), gfmTableFromMarkdown],
    }),
    { extensions: [mdxToMarkdown(), gfmTableToMarkdown()] }
  );
  return {
    data,
    content,
    out,
  };
};

export const getPostPaths = (folder, slug) => {
  const posts = fs.readdirSync(path.join(`posts/${folder}`));
  const fileContents = posts.map((item) => {
    const { data } = matter(
      fs.readFileSync(path.join(`posts/${folder}/${item}`), "utf8")
    );
    return { params: { articleId: data.title } };
  });

  return fileContents;
};

export const getPosts = (folder, slug) => {
  const posts = fs.readdirSync(path.join(`posts/${folder}`));
  const fileContents = posts.map((item) => {
    const { data, content } = matter(
      fs.readFileSync(path.join(`posts/${folder}/${item}`), "utf8")
    );
    return { data, content, path: data.title };
  });

  return fileContents;
};
