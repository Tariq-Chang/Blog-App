const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const { JsonWebTokenError } = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!(firstName, lastName, email, password)) {
      return res.status(400).send("All fields are required");
    }

    const userExist = await User.findOne({ email });

    if (!userExist) {
      const encryptedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        firstName,
        lastName,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });

      const token = jwt.sign(
        {
          id: user._id,
          email,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;
      user.save();
      res.status(201).send(user);
    }
    return res.status(200).send("User already exist!, Please Login");
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!(email, password)) {
    return res.status(400).send("All fields are required");
  }

  const user = await User.findOne({ email });
  if (user && bcrypt.compare(user.password, password)) {
    const token = jwt.sign({ id: user._id, email }, process.env.SECRET_KEY, {
      expiresIn: "2h",
    });

    user.token = token;
    user.save();

    return res.status(200).send("User logged in successfully");
  }

  res.status(403).send("Invalid credentials");
});

module.exports = router;
