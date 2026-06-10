export default function ShadevCard({ article }) {
  return (
    <article className="card">
      <a href="#" className="card-link">
        <div className="card-image" style={{ backgroundImage: `url('${article.image}')` }}></div>
        <div className="card-body">
          <span className="card-badge">{article.badge}</span>
          <h3 className="card-title">{article.title}</h3>
          <p className="card-excerpt">{article.excerpt}</p>
          <div className="card-meta"><span>{article.meta}</span></div>
        </div>
      </a>
    </article>
  );
}
