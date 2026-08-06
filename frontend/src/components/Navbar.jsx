import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import "../styles/Navbar.css";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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

          {user && (
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Dashboard
            </NavLink>
          )}

          {!user && (
            <>
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
            </>
          )}

        </nav>

        {/* Right Side */}

        <div className="profile-section">

          {user ? (
            <>
              <div className="profile-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <div className="profile-info">
                <span>Welcome</span>
                <strong>{user.name}</strong>
              </div>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="profile-avatar">
                G
              </div>

              <div className="profile-info">
                <span>Welcome</span>
                <strong>Guest</strong>
              </div>
            </>
          )}

        </div>

      </div>
    </header>
  );
}

export default Navbar;