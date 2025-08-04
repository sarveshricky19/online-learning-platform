const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).json({ error: 'Invalid token.' });
  }
};

// Role-based access control
const permit = (...permittedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    if (permittedRoles.includes(req.user.role)) {
      next();
    } else {
      return res.status(403).json({ error: 'Forbidden: Access denied' });
    }
  };
};

module.exports = { verifyToken, permit };
