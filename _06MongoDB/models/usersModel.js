const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
});

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = {
  UserModel,
};
