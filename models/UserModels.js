var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    name: String,
    age: Number,
    height: Number,
    sex: String,
});

module.exports = mongoose.model("Users", userSchema);
