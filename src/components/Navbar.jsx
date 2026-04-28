import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
      setQuery('');
    }
  };

  return (
    <nav style={{ padding: '20px', backgroundColor: '#0a67f3', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '2.2rem', fontWeight: 'bold' }}>
        PELÍCULAS SPA
      </Link>
      
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Buscar película..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: 'none' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '8px 15px', cursor: 'pointer' }}>
          Buscar
        </button>
      </form>
    </nav>
  );
}

export default Navbar;