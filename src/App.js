import './App.css';
import {listMovie,  searchMovie} from './api'
import { useEffect, useState } from 'react';

function App() {
  const [popularMovies, setPopularMovie] = useState([])
  useEffect(() => {
    listMovie().then((result) => {
      setPopularMovie(result)
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      console.log({img: movie})
      return (
        <div className='Movie-wrapper' key={i}>
          <div className='Movie-title'>{movie.title}</div>
          <img className='Movie-image' src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`} />
          <div className='Movie-date'>release: {movie.release_date}</div>
          <div className='Movie-rate'>{movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = async (q) => {
    if (q.length > 3) {
      const res = await searchMovie(q)
      setPopularMovie(res.results)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>MOVIE</h1>
       <input placeholder='Cari Film Favorite anda....' className='Movie-search' onChange={({ target }) => search(target.value)}/>
       <div className='Movie-container'>
        <PopularMovieList />
       </div>
      </header>
    </div>
  );
}

export default App;
