const express = require('express')

const {
    getWorkouts
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

module.exports = router