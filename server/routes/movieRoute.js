const router = require("express").Router();
const {
  allMovie,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

router.get("/", allMovie);
router.get("/addMovie", addMovie);
router.get("/updateMovie", updateMovie);
router.get("/deleteMovie", deleteMovie);

module.exports = router;
