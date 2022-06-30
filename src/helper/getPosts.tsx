import matter from "gray-matter";
import path from "path";
import fs from "fs";

const files = fs.readdirSync(path.join("posts"));

export const getPostCategory = () => {
  return files.map((bigCategory) => {
    return {
      title: bigCategory,
      sub: fs
        .readdirSync(path.join(`posts/${bigCategory}`))
        .map((middleCategory) => {
          return {
            title: middleCategory,
            count: fs.readdirSync(
              path.join(`posts/${bigCategory}/${middleCategory}`)
            ).length,
          };
        }),
    };
  });
};

export const getPost = (folder: string, id: string) => {
  const [big, sub] = folder.split("-");
  console.log(big, sub);

  const source = fs.readFileSync(
    path.join(`posts/${big}/${sub}/${id}.mdx`),
    "utf8"
  );

  const { data, content } = matter(source);

  return {
    data,
    content,
  };
};

export const getPosts = (folder: string) => {
  const [big, sub] = folder.split("-");
  console.log(big, sub);
  const posts = fs.readdirSync(path.join(`posts/${big}/${sub}`));
  const fileContents = posts.map((item) => {
    const { data, content } = matter(
      fs.readFileSync(path.join(`posts/${big}/${sub}/${item}`), "utf8")
    );
    return { data, content, path: data.title };
  });

  return fileContents;
};
