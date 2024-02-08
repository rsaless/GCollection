const jwt = require('jsonwebtoken');
const User = require('../models/User');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hardcoded credentials for simplicity
    const hardcodedUsername = 'Rafael';
    const hardcodedPassword = 'Senhalegal23';

    if (username !== hardcodedUsername || password !== hardcodedPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = { username: hardcodedUsername, password: hardcodedPassword };

    const token = jwt.sign({ user }, 'Senhalegal23', { expiresIn: '24h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { login };