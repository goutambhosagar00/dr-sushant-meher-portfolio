import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
      <Link to={`/articles/${article.slug}`}>Read More</Link>
    </div>
  );
};

export default ArticleCard;
