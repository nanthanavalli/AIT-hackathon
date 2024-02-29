const express = require("express");
const router = express.Router();
const User = require("../models/user_model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { isEmail, isPassword, isUsername } = require("../utils/validators");
const checkAuth = require("../middlewares/checkAuth");

router.post("/signup", async (req, res, next) => {
  const email = req.body.email.toLowerCase();
  const {
    username,
    regNo,
    college,
    department,
    password,
    confirmPassword,
    phoneNo,
  } = req.body;
  var user;

  if (!isEmail(email)) {
    return res.status(400).json({ message: "Invalid Email" });
  }
  if (!isUsername(username)) {
    return res
      .status(400)
      .json({ message: "Username must contain greater than 3 characters" });
  }
  if (college.trim().length === 0) {
    return toast("Please enter your college name");
  }
  if (regNo.trim().length === 0) {
    return toast("Please enter your registration number");
  }
  if (department.trim().length === 0) {
    return toast("Please enter your department");
  }
  if (!isPassword(password)) {
    return res.status(400).json({
      message: "Password must be atleast greater than 5 characters",
    });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords don't match" });
  }

  try {
    user = await User.findOne({ email: email });
  } catch {
    return res.status(500).json({ message: "Internal Server Error" });
  }

  if (user) {
    return res.status(400).json({ message: "User with email already exist" });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    user = await new User({
      email: email,
      username: username,
      phoneNo: phoneNo,
      college: college,
      regNo: regNo,
      department: department,
      password: hashedPassword,
    }).save();
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }

  const token = jwt.sign(
    {
      userId: user._id.toString(),
      email: user.email,
      username: user.username,
    },
    process.env.JWT_KEY
  );

  res.status(200).json({
    token: token,
    user: {
      userId: user._id.toString(),
      username: user.username,
      email: user.email,
    },
  });
});

router.post("/login", async (req, res, next) => {
  const email = req.body.email.toLowerCase();
  const { password } = req.body;
  var user;

  if (!isEmail(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }
  if (!isPassword(password)) {
    return res.status(400).json({ message: "Invalid password" });
  }

  try {
    user = await User.findOne({ email: email });
  } catch {
    return res.status(500).json({ message: "Internal Server Error" });
  }

  if (!user) {
    return res.status(400).json({ message: "Cannot find user, Signup first." });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Password incorrect" });
  }

  const token = jwt.sign(
    {
      userId: user._id.toString(),
      email: user.email,
      username: user.username,
    },
    process.env.JWT_KEY
  );

  res.status(200).json({
    token: token,
    user: {
      userId: user._id.toString(),
      username: user.username,
      email: user.email,
    },
  });
});

router.get("/checkAuth", checkAuth, (req, res) => {
  res.status(200).send();
});

module.exports = router;
