require("dotenv").config();
console.log("JWT Secret:", process.env.JWT_SECRET);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const workoutRoutes = require("./routes/workouts");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to FitTrack API 🚀",
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/workouts", workoutRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });