const express = require("express");

const {
  signupUser,
  loginUser,
} = require("../controllers/authController");

const router = express.Router();

// Register
router.post("/signup", signupUser);

// Login
router.post("/login", loginUser);

module.exports = router;