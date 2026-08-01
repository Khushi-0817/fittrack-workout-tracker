require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Create Express app
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Test Route
app.get('/', (req, res) => {
    res.json({
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