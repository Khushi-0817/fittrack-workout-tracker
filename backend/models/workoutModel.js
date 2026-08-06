const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    // Logged in user who owns this workout
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Strength",
        "Cardio",
        "Yoga",
        "HIIT",
        "Running",
        "Cycling",
        "Stretching",
      ],
    },

    reps: {
      type: Number,
      required: true,
      min: 1,
    },

    load: {
      type: Number,
      required: true,
      min: 0,
    },

    duration: {
      type: Number,
      required: true,
      min: 1,
    },

    calories: {
      type: Number,
      required: true,
      min: 0,
    },

    difficulty: {
      type: String,
      required: true,
      enum: [
        "Beginner",
        "Intermediate",
        "Advanced",
      ],
    },

    notes: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Workout", workoutSchema);