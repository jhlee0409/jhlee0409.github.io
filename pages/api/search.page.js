import { getSearchedPost } from "@/helper/getPosts";

const posts =
  process.env.NODE_ENV === "production"
    ? require("../../cache/data").posts
    : getSearchedPost();

// eslint-disable-next-line import/no-anonymous-default-export
const search = (req, res) => {
  const results = req.query.q
    ? posts.filter((post) => post.title.toLowerCase().includes(req.query.q))
    : [];
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};

export default search;
