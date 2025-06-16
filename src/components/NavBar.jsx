import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#282c34',
      color: 'white',
      display: 'flex',
      gap: '1rem'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      <Link to="/settings" style={{ color: 'white', textDecoration: 'none' }}>Settings</Link>
    </nav>
  );
}