const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const todosSchema = new Schema({
  title: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  userId: {
    type: ObjectId,
  },
});

const TodoModel = mongoose.model("TodoModel", todosSchema);

module.exports = {
  TodoModel,
};
