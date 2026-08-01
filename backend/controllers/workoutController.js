const mongoose = require('mongoose')
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

// GET single workout
const getWorkout = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: 'Workout not found'
        })
    }

    try {

        const workout = await Workout.findById(id)

        if (!workout) {
            return res.status(404).json({
                error: 'Workout not found'
            })
        }

        res.status(200).json(workout)

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

// DELETE workout
const deleteWorkout = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: 'Workout not found'
        })
    }

    try {

        const workout = await Workout.findByIdAndDelete(id)

        if (!workout) {
            return res.status(404).json({
                error: 'Workout not found'
            })
        }

        res.status(200).json(workout)

    } catch (error) {

        res.status(500).json({
            error: error.message
        })

    }

}

// UPDATE workout
const updateWorkout = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: 'Workout not found'
        })
    }

    try {

        const workout = await Workout.findByIdAndUpdate(
            id,
            {
                ...req.body
            },
            {
                new: true,
                runValidators: true
            }
        )

        if (!workout) {
            return res.status(404).json({
                error: 'Workout not found'
            })
        }

        res.status(200).json(workout)

    } catch (error) {

        res.status(400).json({
            error: error.message
        })

    }

}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}