var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: String,
  age: Number,
  height: Number,
});

module.exports = mongoose.model("Users", userSchema);
