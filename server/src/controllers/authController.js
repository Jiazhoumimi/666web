const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const tokenSecret = process.env.TOKEN_SECRET;

// Register + Input validation

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields (name, email, password) are required' });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// ✅ Login + Input validation
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      tokenSecret,
      { expiresIn: '1h' }
    );

    // ✅ Setting cookie
    res.cookie('token', token, {
      httpOnly: true,      // 
      secure: true,        // 
      sameSite: 'None',    // 
      maxAge: 3600000,     // one hour
    });

    // ✅ Return user information
    res.json({
      message: 'Login success',
      token,               
      name: user.name,
      userId: user._id
    });
  
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};


// ✅ Logout
exports.logout = (req, res) => {
  // JWT remove
  res.json({ message: 'Logged out successfully. Please remove token from client.' });
};
