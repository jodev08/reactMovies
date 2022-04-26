import React from "react";

const form = () => {
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
      </div>
    </div>
  );
};

export default form;
