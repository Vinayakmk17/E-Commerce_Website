const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({ name, email, password });

  res.json(user);
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && user.password === password) {
    res.json(user);
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

module.exports = router;