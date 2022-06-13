import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { bundleMDX } from "mdx-bundler";

import rehypeCodeTitles from "rehype-code-titles";
import rehypeImagePlaceholder from "rehype-image-placeholder";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import remarkHeadings from "remark-autolink-headings";
import remarkSlug from "remark-slug";
import remarkSmartypants from "@silvenon/remark-smartypants";
import remarkTableofContents from "remark-toc";
import remarkUnwrapImages from "remark-unwrap-images";

const files = fs.readdirSync(path.join("pages"));
const root = process.cwd();

export const getPostCategory = () => {
  return files.filter((i) => i.search(/.js|.jsx|.ts|.tsx/g) === -1);
};

export const getPost = async (folder, id) => {
  const source = fs.readFileSync(
    path.join(`posts/${folder}/${id}.mdx`),
    "utf8"
  );
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      root,
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      root,
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: path.join(root, `posts/${folder}`),
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm,
        remarkHeadings,
        remarkSlug,
        remarkSmartypants,
        [remarkTableofContents, { tight: true }],
        remarkUnwrapImages,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeCodeTitles,
        rehypePrism,
        [rehypeImagePlaceholder, { dir: "public" }],
      ];
      return options;
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        ".js": "jsx",
      };
      return options;
    },
  });
  return {
    frontmatter,
    code,
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
