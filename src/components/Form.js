import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {

  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios.get(
      'https://api.themoviedb.org/3/search/movie?api_key=99159da30b3363162979e53120928e9d&query=start&language=fr-FR'
  )
  .then((res) => setMoviesData(res.data.results));
},[]);

  

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="serach-input"
          />

          <input type="submit" value="Rechercher"></input>
        </form>

        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            top<span></span>
        </div>
          <div className="btn-sort" id="badToGood">
            flop<span></span>
          </div>
        </div>
      </div>

      <div className="result">
        {moviesData.slice(0,12)
        .map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Form;