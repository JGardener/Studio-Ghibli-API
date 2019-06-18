import React from "react";
import "./FilmBox.css";

function FilmBox(props) {
  console.log(props.title);
  return (
    <div className="filmbox">
      <h1>{props.film.title}</h1>
      <h4>Director: {props.film.director}</h4>
      <p>{props.film.description}</p>
      <p>Rotten Tomato Score: {props.film.rt_score}</p>
    </div>
  );
}

export default FilmBox;
