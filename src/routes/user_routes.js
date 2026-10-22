import express from "express";
import {
  createUser,
  deleteUser,
  getUserByID,
  getUsers,
  updateUser,
  updateUserByID,
} from "../controllers/user_controller.js";

const userRouter = express.Router();

userRouter.post("/", createUser);

userRouter.get("/", getUsers);

userRouter.get("/:id", getUserByID);

userRouter.patch("/", updateUser);

userRouter.put("/:id", updateUserByID);

userRouter.delete("/:id", deleteUser);

export default userRouter;
