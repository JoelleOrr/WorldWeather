import React { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const SingleCity = () => {
  const [city, setCity] = useState({});
  const {id} = useParams();

  useEffect(() => {

        fetch(`https://wyn-weather-api.herokuapp.com/cities/${id}`);
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCity(data);
        });
      });
  
  return(
    <div>
    <h1>{city.name}</h1>
    <div className="forecasts">
      {city.forecasts && city.forecasts.map((forecast) => {
        return (
          <>
          <h3>{moment{forecast.date}.format('MMM D')}</h3>
          <img src={forecast.image} alt={forecast.name} />);
          <h3>{forecast.weather}</h3>
          <p>{forecast.min_temp.toFixed()}</p>
          <p>{forecast.max_temp.toFixed()}</p>
          <p>{forecast.humidity}</p>
      })}
    </div>
    </div>
  );
}

export default SingleCity
