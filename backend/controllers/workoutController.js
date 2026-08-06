const mongoose = require("mongoose");
const Workout = require("../models/workoutModel");

// ======================================
// GET ALL WORKOUTS (Current User)
// ======================================

const getWorkouts = async (req, res) => {
  try {
    const user_id = req.user._id;

    const workouts = await Workout.find({ user_id }).sort({
      createdAt: -1,
    });

    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================================
// GET SINGLE WORKOUT
// ======================================

const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      message: "Workout not found.",
    });
  }

  try {
    const workout = await Workout.findOne({
      _id: id,
      user_id: req.user._id,
    });

    if (!workout) {
      return res.status(404).json({
        message: "Workout not found.",
      });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================================
// CREATE WORKOUT
// ======================================

const createWorkout = async (req, res) => {
  try {
    const {
      title,
      category,
      reps,
      load,
      duration,
      calories,
      difficulty,
      notes,
    } = req.body;

    const workout = await Workout.create({
      user_id: req.user._id,
      title,
      category,
      reps,
      load,
      duration,
      calories,
      difficulty,
      notes,
    });

    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// ======================================
// DELETE WORKOUT
// ======================================

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      message: "Workout not found.",
    });
  }

  try {
    const workout = await Workout.findOneAndDelete({
      _id: id,
      user_id: req.user._id,
    });

    if (!workout) {
      return res.status(404).json({
        message: "Workout not found.",
      });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================================
// UPDATE WORKOUT
// ======================================

const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      message: "Workout not found.",
    });
  }

  try {
    const workout = await Workout.findOneAndUpdate(
      {
        _id: id,
        user_id: req.user._id,
      },
      {
        ...req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!workout) {
      return res.status(404).json({
        message: "Workout not found.",
      });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};