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
  const [big, sub] = folder.split("_");
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

// export const getPostPaths = (folder: string) => {
//   const posts = fs.readdirSync(path.join(`posts/${folder}`));
//   const fileContents = posts.map((item) => {
//     const { data } = matter(
//       fs.readFileSync(path.join(`posts/${folder}/${item}`), "utf8")
//     );
//     return { params: { articleId: data.title } };
//   });

//   return fileContents;
// };

export const getPosts = (folder: string) => {
  // if (
  //   files
  //     .filter((i) => i.search(/.js|.jsx|categoryId|.ts|.tsx/g) === -1)
  //     .filter((i) => i === folder).length === 0
  // ) {
  //   return null;
  // }
  const [big, sub] = folder.split("_");
  const posts = fs.readdirSync(path.join(`posts/${big}/${sub}`));
  const fileContents = posts.map((item) => {
    const { data, content } = matter(
      fs.readFileSync(path.join(`posts/${big}/${sub}/${item}`), "utf8")
    );
    return { data, content, path: data.title };
  });

  return fileContents;
};
