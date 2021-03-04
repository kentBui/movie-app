import Link from "next/link";
import React from "react";

function Movie({ mv }) {
  const shortenText = (text, max) => {
    if (text && text.length > max) {
      return text.substr(0, max) + "...";
    } else {
      return text;
    }
  };
  return (
    <>
      <div className="card h-100">
        <Link href={`/movies/${mv.id}`}>
          <a>
            <img className="card-img-top" src={mv.image} alt={mv.name} />
          </a>
        </Link>
        <div className="card-body">
          <h4 className="card-title">
            <Link href={`/movies/${mv.id}`}>
              <a>{mv.name}</a>
            </Link>
          </h4>
          <h5>{mv.rating}</h5>
          <p className="card-text">{shortenText(mv.description, 50)}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            &#9733; &#9733; &#9733; &#9733; &#9734;
          </small>
        </div>
      </div>
    </>
  );
}

export default Movie;
