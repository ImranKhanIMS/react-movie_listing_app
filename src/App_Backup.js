import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const api = {
  key: '342498a8c56ed5f7e3f219ebbb2305ab',
  base: "https://api.openweathermap.org/data/3.0/",
  // base: 'https://openweathermap.org/api/one-cll-3'
}

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const searchPress = () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setLat(result[0].lat);
      setLon(result[0].lon);
      

      return fetch(`${api.base}onecall?lat=${lat}&lon=${lon}&appid=${api.key}`)

    }).then((res)=>{
      setWeather(res);
    })
    console.log(weather);
    console.log('lat: ', lat, 'lon: ', lon);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>

        <div>
          <input type='text' placeholder='Enter City/Town...'
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={searchPress}>Search</button>
        </div>

        <p>Hayatabad Peshawar, KPK</p>

        <p>32 °F</p>

        <p>Sunny</p>
      </header>
    </div>
  );
}

export default App;
