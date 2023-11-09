import React from 'react';
import './Card.css';

function Card({data}) {
    return (
        <div className='card'>
        <img src={`https://openweathermap.org/img/wn/${data.weather?.[0]?.icon}.png`}></img>
        <h1>{data.name}</h1>
        <p>Temperature: {data.main?.temp}&deg;C</p>
        <p>Weather: {data.weather?.[0]?.main}</p>
      </div>
    );
}

export default Card;