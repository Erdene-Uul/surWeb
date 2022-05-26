const express = require("express");

const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
dotenv.config({ path: "./config/config.env" });

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
