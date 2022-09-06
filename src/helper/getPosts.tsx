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

interface ArticlePathType {
  params: {
    categoryId: string;
    articleId: string;
  };
}

export const getPostPaths = () => {
  const posts = fs.readdirSync(path.join(`posts/`));
  let list: ArticlePathType[] = [];
  posts.forEach((bigCategory) => {
    fs.readdirSync(path.join(`posts/${bigCategory}`)).forEach(
      (middleCategory) => {
        fs.readdirSync(
          path.join(`posts/${bigCategory}/${middleCategory}`)
        ).forEach((mdx) => {
          list.push({
            params: {
              categoryId: `${bigCategory}-${middleCategory}`,
              articleId: mdx.split(".mdx")[0],
            },
          });
        });
      }
    );
  });
  return list;
};
export const getCategoryPaths = () => {
  const posts = fs.readdirSync(path.join(`posts/`));
  return posts.map((bigCategory) => {
    return fs
      .readdirSync(path.join(`posts/${bigCategory}`))
      .map((middleCategory) => {
        return { params: { categoryId: `${bigCategory}-${middleCategory}` } };
      });
  });
};

export const getPost = (folder: string, id: string) => {
  const [big, sub] = folder.split("-");
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
  const posts = fs.readdirSync(path.join(`posts/${big}/${sub}`));
  const fileContents = posts.map((item) => {
    const { data, content } = matter(
      fs.readFileSync(path.join(`posts/${big}/${sub}/${item}`), "utf8")
    );
    return {
      data: Object.assign(data, { mainCategory: big, subCategory: sub }),
      content,
      path: data.title,
    };
  });

  return fileContents;
};

export const getAllPost = () => {
  const flatList = [];
  const result = [];
  let i = 0;
  for (const file of files) {
    flatList.push(
      ...fs.readdirSync(path.join(`posts/${file}`)).map((item) => {
        return `${file}-${item}`;
      })
    );
  }
  // @ts-ignore
  for (const category of flatList) {
    result.push(...getPosts(category));
  }
  return result
    ?.sort(
      // @ts-ignore
      (a: any, b: any) => new Date(b.data.date) - new Date(a.data.date)
    )
    .slice(0, 5);
};
