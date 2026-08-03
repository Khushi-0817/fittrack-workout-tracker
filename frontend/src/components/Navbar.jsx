import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-icon">🏋️</span>
          <div className="logo-text">
            <h2>FitTrack</h2>
            <p>Fitness Tracker</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Signup
          </NavLink>
        </nav>

        {/* Future User Profile */}
        <div className="profile-section">
          <div className="profile-avatar">K</div>

          <div className="profile-info">
            <span>Welcome</span>
            <strong>Guest</strong>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;