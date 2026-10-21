import express from "express";
import dotenv from "dotenv/config";
import connectDB from "./config/db.js";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is listening on ${port}`);
});
