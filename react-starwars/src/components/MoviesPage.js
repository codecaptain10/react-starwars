import React, { useEffect, useState } from "react";

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
      <h1> Movies Page</h1>
      <p>{movies[0].title}</p>
    </div>
  );
}

export default MoviesPage;
