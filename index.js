const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const env = require("dotenv");
env.config()

const userRoutes = require("./routes/userRoutes");
const postRoutes= require("./routes/postRoutes");

mongoose
  .connect(`${process.env.MONGO_URI}/PostApp`)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log("Failed connection", err);
  });

  app.use(
    cors({
      origin: ["http://localhost:5173"],
    })
  );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);
app.use(postRoutes);


const PORT = 8089;
app.listen(PORT, function () {
  console.log(`Server Started : ${PORT}`);
});
