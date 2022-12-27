require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/userRoute");
const movieRoute = require("./routes/movieRoute");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
connectDB();
app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/movies", movieRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
