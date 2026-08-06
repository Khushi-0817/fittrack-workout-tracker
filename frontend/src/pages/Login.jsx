import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import useAuth from "../context/useAuth";
import "../styles/Auth.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await api.post(
        "/auth/login",
        formData
      );

      login(res.data);

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login failed."
      );
    }

    setLoading(false);
  };

  return (
    <div className="auth-page">

      <div className="auth-left">

        <h1>🏋 FitTrack</h1>

        <h2>Welcome Back!</h2>

        <p>
          Log in to access your workouts,
          track your fitness journey,
          and stay consistent every day.
        </p>

      </div>

      <div className="auth-right">

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <h2>Login</h2>

          <p>
            Continue your fitness journey.
          </p>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            className="auth-btn"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

          <div className="auth-footer">

            Don't have an account?

            <Link to="/signup">
              Create One
            </Link>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Login;