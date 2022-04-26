import axios from "axios";
import React, { useEffect } from "react";

const Form = () => {

  useEffect(() => {
    axios.get(
      'https://api.themoviedb.org/3/search/movie?api_key=99159da30b3363162979e53120928e9d&query=start&language=fr-FR'
  )
  .then((res) => console.log(res));
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

      <div className="result"></div>
    </div>
  );
};

export default Form;