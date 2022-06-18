import matter from "gray-matter";
import path from "path";
import fs from "fs";

const files = fs.readdirSync(path.join("posts"));

export const getPostCategory = () => {
  return files
    .filter((i) => i.search(/.js|.jsx|categoryId|.ts|.tsx/g) === -1)
    .map((item, i) => {
      return {
        title: item,
        count: fs.readdirSync(path.join(`posts/${files[i]}`)).length,
      };
    });
};

export const getPost = (folder: string, id: string) => {
  const source = fs.readFileSync(
    path.join(`posts/${folder}/${id}.mdx`),
    "utf8"
  );

  const { data, content } = matter(source);

  return {
    data,
    content,
  };
};

export const getPostPaths = (folder: string) => {
  const posts = fs.readdirSync(path.join(`posts/${folder}`));
  const fileContents = posts.map((item) => {
    const { data } = matter(
      fs.readFileSync(path.join(`posts/${folder}/${item}`), "utf8")
    );
    return { params: { articleId: data.title } };
  });

  return fileContents;
};

export const getPosts = (folder: string) => {
  if (
    files
      .filter((i) => i.search(/.js|.jsx|categoryId|.ts|.tsx/g) === -1)
      .filter((i) => i === folder).length === 0
  ) {
    return null;
  }
  const posts = fs.readdirSync(path.join(`posts/${folder}`));
  const fileContents = posts.map((item) => {
    const { data, content } = matter(
      fs.readFileSync(path.join(`posts/${folder}/${item}`), "utf8")
    );
    return { data, content, path: data.title };
  });

  return fileContents;
};
