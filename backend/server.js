require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Import Routes
const workoutRoutes = require('./routes/workouts')

// Create Express App
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/workouts', workoutRoutes)

// Test Route
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to FitTrack API 🚀"
    })
})

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ Connected to MongoDB")

        app.listen(process.env.PORT, () => {
            console.log(`🚀 Server running on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })