import React from "react";
import Home1 from "../img/home1.jpg";
import Home2 from "../img/home2.jpg";
import Home3 from "../img/home3.jpg";

function HomePage() {
  return (
    <div className='home-page'>
      <section className='home-section1'>
        <h1> Welcome in Star Wars World!</h1>
        <div className='img-banner'>
          <img src={Home1} alt=''></img>
          <img src={Home2} alt=''></img>
          <img src={Home3} alt=''></img>
        </div>
        <p>A long time ago in a galaxy far, far away .... Do you know that?</p>
      </section>
    </div>
  );
}

export default HomePage;
