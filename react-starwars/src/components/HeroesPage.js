import React, { useState, useEffect } from "react";
import Hero from "./Hero";

function HeroesPage() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`https://swapi.dev/api/people/`);

    const fetchPeople = await data.json();
    //console.log(fetchPeople);
    await setHeroes(fetchPeople.results);
    await console.log(heroes);
  };

  return (
    <div className='heroes-page'>
      {heroes.map(hero => (
        <Hero name={hero.name} />
      ))}
    </div>
  );
}

export default HeroesPage;
