import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRouter from "./routes/user_routes.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is listening on ${port}`);
});
