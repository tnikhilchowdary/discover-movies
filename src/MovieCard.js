// MovieCard.js
import React from 'react';

function MovieCard({ title, poster_path, vote_average, release_date }) {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>⭐ {vote_average}</p>
        <p>📅 {release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
