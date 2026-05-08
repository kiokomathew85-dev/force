function Article({ article }) {
  return (
    <article>
      <h3>{article.title}</h3>
      <p className="date">{article.date}</p>
      <p>{article.content}</p>
    </article>
  );
}

export default Article;