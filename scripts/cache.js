import path from "path";
import fs from "fs";
import matter from "gray-matter";

export const getSearchedPosts = () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullpath = path.join(postsDirectory, fileName);
    const fileContents = fs.readdirSync(fullpath, "utf-8");
    // @ts-ignore
    const matterResult = matter(fileContents);
    return {
      id,
      title: matterResult.data.title,
    };
  });
  return JSON.stringify(posts);
};

const fileContents = `export const posts = ${getSearchedPosts()}`;
try {
  fs.readdirSync("cache");
} catch (e) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.js", fileContents, (err) => {
  if (err) return console.log(err);
  console.log("Posts cached.");
});
