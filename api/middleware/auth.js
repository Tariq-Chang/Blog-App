const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  console.log(req.headers);
  next();
};

module.exports = verifyToken;
