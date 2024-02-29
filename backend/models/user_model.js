const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  regNo: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  otpSecret: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("User", schema);

module.exports = User;
