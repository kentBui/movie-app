import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getMovie } from "../../actions";

function MovieDetail({ movie }) {
  return (
    <>
      {movie && (
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <img src={movie.image} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{movie.name}</h5>
                  <p className="card-text">{movie.description}</p>
                  <Link href="/">
                    <a className="btn btn-primary">Back</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

MovieDetail.getInitialProps = async (ctx) => {
  try {
    const movie = await getMovie(ctx.query.id);
    return { movie };
  } catch (error) {
    console.log(error);
  }
};

export default MovieDetail;
