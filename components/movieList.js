import React, { useEffect, useState } from "react";
import Movie from "./movie";
// import { getmoviesData } from "../actions";

function MovieList({ movies }) {
  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   setLoading(true);
  //   getmoviesData()
  //     .then((data) => {
  //       setMovies(data);
  //       setError(null);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <>
      {/* {loading && (
        <div className="col">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden"></span>
          </div>
        </div>
      )}

      {error && (
        <div className="col">
          <div class="alert alert-danger text-center" role="alert">
            {error}
          </div>
        </div>
      )} */}

      {movies &&
        movies.map((mv) => (
          <div key={mv.id} className="col-lg-4 col-md-6 mb-4">
            <Movie mv={mv} />
          </div>
        ))}
    </>
  );
}

export default MovieList;
