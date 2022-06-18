import { useRouter } from "next/router";
import { Base } from "./article.css";
const Article = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div className={Base}>
      <aside>{router.query.articleId}</aside>
      <section>
        <div>20 January 2022</div>
        <div></div>
      </section>
      <aside>123</aside>
    </div>
  );
};

export default Article;
