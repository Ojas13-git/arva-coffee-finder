// authMiddleware.js

const dotenv = require('dotenv');
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;
const ACCESS_KEY = process.env.ACCESS_KEY;

const authenticate = (req, res, next) => {
  const { headers } = req;
  const { accesskey, secretkey } = headers;

  if (!accesskey || !secretkey) {
    return res.status(401).json({ message: 'Access denied. Missing access key or secret key.' });
  }

  // Replace this with your actual validation logic
  if (accesskey !== ACCESS_KEY || secretkey !== SECRET_KEY) {
    return res.status(403).json({ message: 'Invalid access key or secret key.' });
  }

  // If authentication succeeds, proceed to the next middleware or route handler
  next();
};

module.exports = authenticate;
