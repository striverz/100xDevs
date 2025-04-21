const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://striverz:Kmk%400011@100xdevs.xyzyzcn.mongodb.net/todosDatabase"
  );
};

module.exports = {
  connectDB,
};
