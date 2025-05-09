// src/controllers/userController.js
const User = require('../models/userModel');

// GET ALL USERS
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(`Error fetching users: ${err.message}`);
  }
};

// GET USERS BY ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(`Error fetching user: ${err.message}`);
  }
};

// CREATE USERS
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).send(`Error creating user: ${err.message}`);
  }
};

// UPDATE USERS
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) return res.status(404).send("User not found");
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).send(`Error updating user: ${err.message}`);
  }
};

// DELETE USERS
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).send("User not found");
    res.status(200).send("User deleted successfully");
  } catch (err) {
    res.status(500).send(`Error deleting user: ${err.message}`);
  }
};
