const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxLength: 100
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    maxLength: 100,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"]
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters'],
    maxLength: 100
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);
