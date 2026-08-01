const Workout = require('../models/workoutModel')

// GET all workouts
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find().sort({ createdAt: -1 })

        res.status(200).json(workouts)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

// CREATE workout
const createWorkout = async (req, res) => {

    const {
        title,
        category,
        reps,
        load,
        duration,
        calories,
        difficulty,
        notes
    } = req.body

    try {

        const workout = await Workout.create({
            title,
            category,
            reps,
            load,
            duration,
            calories,
            difficulty,
            notes
        })

        res.status(201).json(workout)

    } catch (error) {

        res.status(400).json({
            error: error.message
        })

    }

}

module.exports = {
    getWorkouts,
    createWorkout
}