const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    min: 2,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    min: 2,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    max: 30,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
