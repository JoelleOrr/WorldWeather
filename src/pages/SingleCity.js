import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const SingleCity = () => {
  const [city, setCity] = useState({});
  const {id} = useParams();
  const [toggleTemp, setToggleTemp] = useState("celsius");

  useEffect(() => {

        fetch(`https://wyn-weather-api.herokuapp.com/cities/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCity(data);
        });
      });

      const handleTemp = () => {
        if (toggleTemp === "celsius") {
          setToggleTemp ("farenheit") 
        } else {
          setToggleTemp ("celsius")
        }
      }

  
  return(
    <div>
    <h1>{city.name}</h1>
    <div className="forecasts">
      {city.forecasts && city.forecasts.map((forecast) => {
        return (
          <div className="forecast">
          <h3>{moment(forecast.date).format('MMM D')}</h3>
          <img src={forecast.image} alt={forecast.name} />
          <h3>{forecast.weather}</h3>
          <p>{toggleTemp === 'celsius'
                    ? forecast.min_temp.toFixed()
                    : (1.8 * forecast.min_temp + 32).toFixed()}</p>
          <p>{toggleTemp === 'celsius'
                    ? forecast.max_temp.toFixed()
                    : (1.8 * forecast.max_temp + 32).toFixed()}</p>
          <p>{forecast.humidity}</p>
          </div>
      );
      })}
    </div>
<div className="buttonArea">
    <button className= "button" onClick={handleTemp}>
    {toggleTemp === 'celsius'
                    ? "Temp in Farenheit"
                    : "Temp in Celsius"}
    </button>

    </div>

    </div>
  );
}

export default SingleCity
