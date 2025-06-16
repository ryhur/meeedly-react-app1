import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/settings" className="nav-link">Settings</NavLink>
    </nav>
  )
}