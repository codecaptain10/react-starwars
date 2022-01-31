import React from "react";

function Movie(props) {
  return (
    <div className='movie-page'>
      <div className='movie'>
        <h1>{props.movie}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Movie;
