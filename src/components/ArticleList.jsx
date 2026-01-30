import articles from "../data/articles";


const ArticleList = () => {
  return (
    <section className="articles-section">
      <div className="articles-container">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <h3 className="article-title">{article.title}</h3>

            <div className="article-meta">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>

            <p className="article-excerpt">{article.excerpt}</p>

            <div className="article-tags">
              {article.tags.map((tag, i) => (
                <span className="tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleList;
