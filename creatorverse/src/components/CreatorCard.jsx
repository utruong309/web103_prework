import { Link } from "react-router-dom";

function CreatorCard({ creator }) {
  return (
    <article className="card">
      <img src={creator.imageURL} alt={creator.name} />

      <div className="overlay">
        <h2>{creator.name}</h2>

        <div className="icons">
          {creator.url ? (
            <a
              href={creator.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${creator.name}'s link in a new tab`}
            >
              🔗
            </a>
          ) : null}

          <Link
            to={`/creator/${creator.id}`}
            aria-label={`View details for ${creator.name}`}
          >
            ℹ️
          </Link>

          <Link
            to={`/edit/${creator.id}`}
            aria-label={`Edit ${creator.name}`}
          >
            ✏️
          </Link>
        </div>

        {creator.description ? (
          <p className="card-desc">{creator.description}</p>
        ) : null}
      </div>
    </article>
  );
}

export default CreatorCard;