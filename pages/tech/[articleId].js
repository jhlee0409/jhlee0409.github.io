import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();
  return (
    <div>
      <main>
        <h1>{router.query.articleId}</h1>
      </main>
    </div>
  );
};

export default Article;
