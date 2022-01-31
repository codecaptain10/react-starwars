import React, { useEffect, useState } from "react";
import Movie from "./Movie.js";

function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`https://swapi.dev/api/films`);

    const fetchPeople = await data.json();
    //console.log(fetchPeople);
    await setMovies(fetchPeople.results);
    await console.log(movies);
  };
  return (
    <div className='movies-page'>
      {movies.map(movie => (
        <Movie
          episode_id={movie.episode_id}
          title={movie.title}
          director={movie.director}
          relase_date={movie.release_date}
          description={movie.opening_crawl}
        />
      ))}
    </div>
  );
}

export default MoviesPage;
