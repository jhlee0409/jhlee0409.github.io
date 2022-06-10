import matter from "gray-matter";
import path from "path";
import fs from "fs";

const files = fs.readdirSync(path.join("pages"));

export const getPostCategory = () => {
  return files.filter((i) => i.search(/.js|.jsx|.ts|.tsx/g) === -1);
};

export const getPost = (folder, slug) => {
  const fileContents = fs.readFileSync(
    path.join(`posts/${folder}/${slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};
