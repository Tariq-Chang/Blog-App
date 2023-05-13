const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: null,
  },
  lastName: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
  token: String,
});

const user = mongoose.model("User", userSchema);
module.exports = user;
