import React from "react";

function Movie(props) {
  return (
    <div className='movie-page'>
      <div className='movie-data'>
        <h1>
          Episode {props.episode_id}: {props.title}
        </h1>
        <div className='movie-underdata'>
          <h4>Director: {props.director}</h4>
          <h4>Premier: {props.relase_date}</h4>
        </div>
      </div>
      <div className='movie-description'>{props.description}</div>
    </div>
  );
}

export default Movie;
