const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
    },
    subtitle: {
      type: Array,
      default: [],
    },
    description: {
      type: String,
      default: "",
    },
    type: {
      type: Array,
      default: [],
    },
    screenshot: {
      type: Array,
      default: [],
    },
    link: {
      type: String,
      default: "",
    },
    released: {
      type: Date,
      required: true,
    },
    imdb: {
      type: Number,
      default: 0,
    },
    origin: {
      type: String,
    },
    size: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("movie", movieSchema);
