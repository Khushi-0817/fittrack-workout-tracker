const express = require('express')

const {
    getWorkouts,
    createWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// CREATE workout
router.post('/', createWorkout)

module.exports = router