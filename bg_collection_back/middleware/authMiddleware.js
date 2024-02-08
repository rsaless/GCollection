const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - Missing token' });
  }

  jwt.verify(token, 'Senhalegal23', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }

    req.user = decoded.user;
    next();
  });
};

module.exports = authenticate;