import React from "react";

const Card = ({ movie }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };
  /*
  const genreFinder =() =>{
     let genreArray = [];
     for (let i = 0; i< movie.genre_ids.length; i++){
        switch(movie.genre_ids[i]) {

        }
     }
  }
  */

  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
            : "./img/movie.jpg"
        }
        alt=""
      />

      <h2>{movie.title}</h2>
      {movie.release_date ? (
        <h5>Date de sortie : {dateFormater(movie.release_date)}</h5>
      ) : (
        ""
      )}

      {movie.vote_average ? (
        <h4>
          Vote : {movie.vote_average}/10 <span></span>
        </h4>
      ) : (
        ""
      )}

      {movie.overview ? <p>synopsis : {movie.overview}</p> : ""}

      <div className="btn">Ajouter aux coups de coeur</div>
    </div>
  );
};

export default Card;
