import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { searchMovies } from '../services/api';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q'); // Obtenemos el texto de la URL

  useEffect(() => {
    if (query) {
      searchMovies(query).then(data => setMovies(data));
    }
  }, [query]);

  return (
    <div>
      <h2>Resultados para: "{query}"</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
              {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} style={{ width: '100%' }} />
              )}
              <h3>{movie.title}</h3>
              <Link to={`/movie/${movie.id}`}>Ver detalles</Link>
            </div>
          ))
        ) : (
          <p>No se encontraron películas.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;