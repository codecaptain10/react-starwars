import React from "react";

function Hero(props) {
  return (
    <div className='hero-page'>
      <div className='hero'>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

export default Hero;
