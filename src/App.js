import './App.css';
import { useEffect, useState } from 'react';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=155ab6db670a6ff2163d872e06f64d21";
function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then(data => {
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  return (
    <div className='container'>
      <div className='grid'>
        {movies.map((movieReq) =>
        <MovieBox key={movieReq.id} {...movieReq} />)}
      </div>
    </div>
  );
}

export default App;
