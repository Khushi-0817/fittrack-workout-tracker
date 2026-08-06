import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import useAuth from "../context/useAuth";
import "../styles/Auth.css";

function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
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

    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/signup", formData);

      login(res.data);

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to create account."
      );
    }

    setLoading(false);
  };

  return (
    <div className="auth-page">

      <div className="auth-left">

        <h1>🏋 FitTrack</h1>

        <h2>Start Your Fitness Journey</h2>

        <p>
          Create your account and begin tracking workouts,
          calories, progress and achieve your goals.
        </p>

      </div>

      <div className="auth-right">

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <h2>Create Account</h2>

          <p>
            Sign up to continue.
          </p>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

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
              ? "Creating Account..."
              : "Create Account"}
          </button>

          <div className="auth-footer">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Signup;