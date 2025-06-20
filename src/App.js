import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const API_KEY = '08e79788222331ca5dd9514fa3083a3d';
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.log("Failed to fetch movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <h1 className="heading">Discover Movies</h1>
      <input
        className="search-bar"
        type="text"
        placeholder="Search Movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="movie-grid">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.vote_average}</p>
              <p>{movie.release_date}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
