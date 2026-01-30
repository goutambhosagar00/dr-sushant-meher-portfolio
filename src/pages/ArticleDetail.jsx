import { useParams } from "react-router-dom";
import Seo from "../seo/Seo";
import articles from "../data/articles.json";

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <p>Article not found</p>;

  return (
    <>
      <Seo title={article.title} description={article.summary} />
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </>
  );
};

export default ArticleDetail;
