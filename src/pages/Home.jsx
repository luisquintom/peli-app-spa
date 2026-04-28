import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { getPopularMovies } from '../services/api';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(data => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Películas Populares</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px' }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            <img 
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
              alt={movie.title} 
              style={{ width: '100%' }}
            />
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`} style={{ color: 'blue', fontWeight: 'bold' }}>
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;