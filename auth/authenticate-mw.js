const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets.js')

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, jwtSecret, function (error, decodedToken) {
      if (error) {
        res.status(401).json({ message: "Invalid Token" });
      } else {
        req.token = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'You shall not pass!!' });
  }
};