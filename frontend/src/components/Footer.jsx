import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            🏋️
          </div>

          <div>
            <h2>FitTrack</h2>

            <p>
              Track workouts, monitor progress, and build healthier habits every
              day.
            </p>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>

        <div className="footer-contact">
          <h3>Stay Motivated</h3>

          <p>💪 One workout at a time.</p>
          <p>🔥 Stay consistent.</p>
          <p>🚀 Become your strongest self.</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {year} FitTrack • Built with React, Node.js & MongoDB
      </div>
    </footer>
  );
}

export default Footer;