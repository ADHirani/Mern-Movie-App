require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = () =>
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected with database");
    })
    .catch((err) => {
      console.log(err);
    });

module.exports = connectDB;
