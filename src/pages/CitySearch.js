import React { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'; 

const CitySearch = () => {

  const [cities, setCities] = useState([]);

  const handleSearch = (e) => {
    fetch(`https://wyn-weather-api.herokuapp.com/cities?query=${e.target.value}`)

    .then((response) => response.json())
    .then((cities) => setCities(cities));
    console.log(cities);
  };


    return(
      <div>
      <h1>City Search</h1>
      <input type="text" onChange={handleSearch}/>
      <ul>
       {cities.map((city) => {
         return 
         <li key={city.id}>
           <Link to={`/cities/${city.id}`}>{city.name}</Link>
           </li>;
         })}
         </div>
    );
  };

export default CitySearch
