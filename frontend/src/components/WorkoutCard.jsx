import { useState } from "react";
import api from "../services/api";
import "../styles/WorkoutCard.css";

function WorkoutCard({ workout, fetchWorkouts }) {
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    title: workout.title,
    category: workout.category,
    reps: workout.reps,
    load: workout.load,
    duration: workout.duration,
    calories: workout.calories,
    difficulty: workout.difficulty,
    notes: workout.notes,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const deleteWorkout = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this workout?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/workouts/${workout._id}`);
      fetchWorkouts();
    } catch (err) {
      console.log(err);
    }
  };

  const updateWorkout = async () => {
    try {
      await api.patch(`/workouts/${workout._id}`, formData);
      setEditing(false);
      fetchWorkouts();
    } catch (err) {
      console.log(err);
    }
  };

  if (editing) {
    return (
      <div className="workout-card edit-mode">

        <div className="edit-header">
          <h2>Edit Workout</h2>
        </div>

        <div className="edit-grid">

          <input
            name="title"
            placeholder="Workout Title"
            value={formData.title}
            onChange={handleChange}
          />

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

          <input
            type="number"
            name="reps"
            placeholder="Reps"
            value={formData.reps}
            onChange={handleChange}
          />

          <input
            type="number"
            name="load"
            placeholder="Load"
            value={formData.load}
            onChange={handleChange}
          />

          <input
            type="number"
            name="duration"
            placeholder="Duration"
            value={formData.duration}
            onChange={handleChange}
          />

          <input
            type="number"
            name="calories"
            placeholder="Calories"
            value={formData.calories}
            onChange={handleChange}
          />

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

        <textarea
          name="notes"
          rows="4"
          placeholder="Workout Notes..."
          value={formData.notes}
          onChange={handleChange}
        />

        <div className="edit-actions">

          <button
            className="save-btn"
            onClick={updateWorkout}
          >
            💾 Save Changes
          </button>

          <button
            className="cancel-btn"
            onClick={() => setEditing(false)}
          >
            Cancel
          </button>

        </div>

      </div>
    );
  }

  return (
    <article className="workout-card">

      <div className="card-top">

        <div>

          <h2>{workout.title}</h2>

          <p className="difficulty-badge">
            ⭐ {workout.difficulty}
          </p>

        </div>

        <span className="category-badge">
          {workout.category}
        </span>

      </div>

      <div className="stats-grid">

        <div className="info-box">
          <span>💪</span>
          <div>
            <h4>{workout.reps}</h4>
            <p>Reps</p>
          </div>
        </div>

        <div className="info-box">
          <span>🏋️</span>
          <div>
            <h4>{workout.load} kg</h4>
            <p>Load</p>
          </div>
        </div>

        <div className="info-box">
          <span>🔥</span>
          <div>
            <h4>{workout.calories}</h4>
            <p>Calories</p>
          </div>
        </div>

        <div className="info-box">
          <span>⏱️</span>
          <div>
            <h4>{workout.duration} min</h4>
            <p>Duration</p>
          </div>
        </div>

      </div>

      {workout.notes && (
        <div className="notes-box">
          <strong>Notes</strong>
          <p>{workout.notes}</p>
        </div>
      )}

      <div className="card-actions">

        <button
          className="edit-btn"
          onClick={() => setEditing(true)}
        >
          ✏ Edit
        </button>

        <button
          className="delete-btn"
          onClick={deleteWorkout}
        >
          🗑 Delete
        </button>

      </div>

    </article>
  );
}

export default WorkoutCard;