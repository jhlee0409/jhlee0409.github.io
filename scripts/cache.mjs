import path from "path";
import fs from "fs";
import matter from "gray-matter";
const files = fs.readdirSync(path.join("posts"));

export const getSearchedAllPosts = (folder) => {
  const [big, sub] = folder.split("-");
  const posts = fs.readdirSync(path.join(`posts/${big}/${sub}`));
  const fileContents = posts.map((item) => {
    const { data, content } = matter(
      fs.readFileSync(path.join(`posts/${big}/${sub}/${item}`), "utf8")
    );
    return {
      data: Object.assign(data, { mainCategory: big, subCategory: sub }),
      title: data.title,
      id: `${big}-${sub}`,
    };
  });

  return fileContents;
};

export const getSearchedPost = () => {
  const flatList = [];
  const result = [];
  for (const file of files) {
    flatList.push(
      ...fs.readdirSync(path.join(`posts/${file}`)).map((item) => {
        return `${file}-${item}`;
      })
    );
  }
  for (const category of flatList) {
    result.push(...getSearchedAllPosts(category));
  }
  return JSON.stringify(
    result?.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
  );
};

const fileContents = `export const posts = ${getSearchedPost()}`;
try {
  fs.readdirSync("cache");
} catch (e) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.js", fileContents, (err) => {
  if (err) return console.log(err);
  console.log("Posts cached.");
});
