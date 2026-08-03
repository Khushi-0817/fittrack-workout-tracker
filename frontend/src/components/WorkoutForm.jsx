import { useState } from "react";
import api from "../services/api";
import "../styles/WorkoutForm.css";

function WorkoutForm({ fetchWorkouts }) {
  const initialState = {
    title: "",
    category: "Strength",
    reps: "",
    load: "",
    duration: "",
    calories: "",
    difficulty: "Beginner",
    notes: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/workouts", formData);

      setFormData(initialState);

      fetchWorkouts();
    } catch (err) {
      console.log(err);
      alert("Unable to add workout.");
    }
  };

  return (
    <section className="workout-form-card">

      <div className="form-header">
        <h2>Add Workout</h2>

        <p>
          Record today's training session and keep track of your fitness
          progress.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="workout-form">

        <div className="full-width">

          <label>Workout Title</label>

          <input
            type="text"
            name="title"
            placeholder="e.g. Incline Bench Press"
            value={formData.title}
            onChange={handleChange}
            required
          />

        </div>

        <div>

          <label>Category</label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option>Strength</option>
            <option>Cardio</option>
            <option>Yoga</option>
            <option>HIIT</option>
            <option>Running</option>
            <option>Cycling</option>
            <option>Stretching</option>
          </select>

        </div>

        <div>

          <label>Difficulty</label>

          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

        </div>

        <div>

          <label>Reps</label>

          <input
            type="number"
            name="reps"
            placeholder="12"
            value={formData.reps}
            onChange={handleChange}
            required
          />

        </div>

        <div>

          <label>Load (kg)</label>

          <input
            type="number"
            name="load"
            placeholder="60"
            value={formData.load}
            onChange={handleChange}
            required
          />

        </div>

        <div>

          <label>Duration (mins)</label>

          <input
            type="number"
            name="duration"
            placeholder="45"
            value={formData.duration}
            onChange={handleChange}
            required
          />

        </div>

        <div>

          <label>Calories</label>

          <input
            type="number"
            name="calories"
            placeholder="350"
            value={formData.calories}
            onChange={handleChange}
            required
          />

        </div>

        <div className="full-width">

          <label>Notes</label>

          <textarea
            name="notes"
            rows="5"
            placeholder="Write anything about today's workout..."
            value={formData.notes}
            onChange={handleChange}
          />

        </div>

        <button className="submit-btn" type="submit">
          ➕ Add Workout
        </button>

      </form>

    </section>
  );
}

export default WorkoutForm;