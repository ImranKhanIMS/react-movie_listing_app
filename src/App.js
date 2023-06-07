import './App.css';
import { useEffect, useState } from 'react';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=155ab6db670a6ff2163d872e06f64d21";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=155ab6db670a6ff2163d872e06f64d21&query";
function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then(data => {
      // console.log(data);
      setMovies(data.results);
    })
  }, [])

  const searchMovie = async(e) => {
    e.preventDefault();
    // console.log('Searching...');
    try{
      const url = `https://api.themoviedb.org/3/search/movie?api_key=155ab6db670a6ff2163d872e06f64d21&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler = (e) => {
    setQuery(e.target.value);
  }

  return (
    <>

    <Navbar bg="dark" expand="lg" variant="dark">
    <Container fluid>
      <Navbar.Brand href="/">Movie App</Navbar.Brand>
      <Navbar.Brand href="/">Trending</Navbar.Brand>
      <Navbar.Toggle aria-controls='navbarScroll'></Navbar.Toggle>
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-3'
            style={{ maxHeight: '100px' }}
            navbarScroll></Nav>

            <Form className='d-flex' onSubmit={searchMovie}>
              <FormControl
                type='search'
                placeholder='Search Movie...'
                className='me-2'
                aria-aria-label='search'
                name='query'
                value={query}
                onChange={changeHandler}
                ></FormControl>
                <Button variant='secondary' type='submit'>Search</Button>
            </Form>
        </Navbar.Collapse>
    </Container>
    </Navbar>

    <div>
      {movies.length > 0 ? (
        <div className='container'>
          <div className='grid'>
            {movies.map((movieReq) =>
            <MovieBox key={movieReq.id} {...movieReq} />)}
          </div>
        </div>
      ) : (
        <h2>Sorry! Movie not Found</h2>
      )}
    </div>

    </>    
  );
}

export default App;
