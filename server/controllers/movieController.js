const expressHandler = require("express-async-handler");
const Movie = require("../models/movieModel");

// Find All Movies
const allMovie = expressHandler(async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    if (allMovie.length != 0) {
      // // sort list a Movies

      // allMovie.sort(function compare(a, b) {
      //   var dateA = new Date(a.released);
      //   var dateB = new Date(b.released);
      //   return dateA - dateB;
      // });
      res.json({ status: true, message: "Movie Found.", allMovies });
    } else {
      res.json({
        status: false,
        message: "Movies are not available till now.",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// Add Movie to the Database
const addMovie = expressHandler(async (req, res, next) => {
  try {
    const {
      title,
      poster,
      subtitle,
      description,
      type,
      screenshot,
      link,
      released,
      imdb,
      origin,
    } = await req.body;

    if (title) {
      if (released) {
        const addedMovie = await Movie.create({
          title,
          poster,
          subtitle,
          description,
          type,
          screenshot,
          link,
          released,
          imdb,
          origin,
        });

        if (addedMovie) {
          res.status(201).json({
            status: true,
            message: `${
              (await addedMovie).title
            } successfully added to the Database.`,
          });
        } else {
          res
            .status(400)
            .json({ status: false, message: "Something went wrong." });
        }
      } else {
        res
          .status(400)
          .json({ status: false, message: "Released date is required." });
      }
    } else {
      res.status(400).json({ status: false, message: "Title is Required." });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// Update Movie Into Database
const updateMovie = expressHandler(async (req, res, next) => {
  try {
    const {
      title,
      poster,
      subtitle,
      description,
      type,
      screenshot,
      link,
      released,
      imdb,
      origin,
      _id,
    } = await req.body;

    if (_id) {
      if (title) {
        if (released) {
          const updatedMovie = await Movie.findByIdAndUpdate(
            { _id },
            {
              title,
              poster,
              subtitle,
              description,
              type,
              screenshot,
              link,
              released,
              imdb,
              origin,
            }
          );

          if (updatedMovie) {
            res.status(201).json({
              status: true,
              message: `Updated to ${updatedMovie.title}. `,
            });
          } else {
            res.status(400).json({
              status: false,
              message: "Something went wrong, try again.",
            });
          }
        } else {
          res.status(400).json({
            status: false,
            message: "released date is required field.",
          });
        }
      } else {
        res.status(400).json({ status: false, message: "Title is required." });
      }
    } else {
      res
        .status(400)
        .json({ status: false, message: "ID is required to update Movie." });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// Delete Movie from Database
const deleteMovie = expressHandler(async (req, res, next) => {
  try {
    const { _id } = await req.body;

    if (_id) {
      const deletedMovie = await Movie.findByIdAndDelete({ _id });

      if (deletedMovie) {
        res.status(201).json({
          status: true,
          message: `${deletedMovie.title} deleted from the database.`,
        });
      } else {
        res
          .status(400)
          .json({ status: false, message: "something went wrong." });
      }
    } else {
      res.status(400).json({ status: false, message: "Movie not found." });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = { allMovie, addMovie, updateMovie, deleteMovie };
