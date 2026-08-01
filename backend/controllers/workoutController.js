const Workout = require('../models/workoutModel')

// GET all workouts
const getWorkouts = async (req, res) => {
    res.status(200).json({
        message: "Get all workouts"
    })
}

module.exports = {
    getWorkouts
}