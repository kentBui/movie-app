import Link from "next/link";
import React from "react";
import { getMovieWithCate } from "../../actions";
import MovieList from "../../components/movieList";

function MoviesWithCategory({ movies }) {
  console.log(movies);
  return (
    <>
      <div className="container">
        <div className="row">
          <MovieList movies={movies || []} />
        </div>
      </div>
    </>
  );
}

MoviesWithCategory.getInitialProps = async (ctx) => {
  try {
    const movies = await getMovieWithCate(ctx.query.id);
    return { movies };
  } catch (error) {
    console.log(error);
  }
};

export default MoviesWithCategory;
