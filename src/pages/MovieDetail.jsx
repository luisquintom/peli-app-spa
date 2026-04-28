import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/api';

function MovieDetail() {
  const { id } = useParams(); // Captura :id de la URL 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Llama a la API
    getMovieDetails(id).then(data => setMovie(data));
  }, [id]);

  if (!movie) return <p>Cargando detalles...</p>;

  return (
    <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
      <img 
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} 
        alt={movie.title} 
        style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
      />
      <div>
        <h1>{movie.title}</h1>
        <h3>Sinopsis</h3>
        <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>{movie.overview}</p>
        <p><strong>Calificación:</strong> ⭐ {movie.vote_average.toFixed(1)} / 10</p>
        <p><strong>Fecha de estreno:</strong> {movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieDetail;