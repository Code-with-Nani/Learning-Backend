import { Users } from "../models/users_model.js";

export const createUser = async (req, res) => {
  let { name, age, email, username } = req.body;

  try {
    let user = await Users.create({ name, age, email, username });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json({ messgae: error });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ messgae: "Users not found" });
  }
};

export const getUserByID = async (req, res) => {
  try {
    let id = req.params.id;
    const user = await Users.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ messgae: "Users not found" });
  }
};

export const updateUserByID = async (req, res) => {
  let { age, email } = req.body;
  let id = req.params.id;
  try {
    getUserByID;
    let user = await Users.findByIdAndUpdate(
      id,
      { age, email },
      { returnDocument: "after" },
    );
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(400).json({ message: "User not found" });
  }
};

export const updateUser = async (req, res) => {
  let { name, username } = req.body;

  try {
    let user = await Users.updateOne(
      { username },
      { name },
      { returnDocument: "after" },
    );
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(400).json({ message: "User not found" });
  }
};

export const deleteUser = async (req, res) => {
  let id = req.params.id;

  try {
    let user = await Users.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully", user });
  } catch (error) {
    res.status(400).json({ message: "User not found" });
  }
};
