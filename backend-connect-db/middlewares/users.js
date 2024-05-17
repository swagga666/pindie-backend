const users = require("../models/user");
const bcrypt = require("bcryptjs");

const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({});
  next();
};

const findUserById = async (req, res, next) => {
  try {
    req.user = await users.findById(req.params.id);
    next();
  } catch (error) {
    res.status(404).send({ message: "Пользователь не найден" });
  }
};

const hashPassword = async(req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(8);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.bodu.password = hash;
    next()
  } catch (error) {
    res.status(400).send({ message: "Error deleting user" });
  }
};

const createUser = async (req, res, next) => {
  try {
    req.user = await users.create(req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка создания пользователя" });
  }
};

const updateUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка при обновлении пользователя" });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка удаления пользователя" });
  }
};

module.exports = {
  findUserById,
  findAllUsers,
  createUser,
  updateUser,
  deleteUser,
  hashPassword,
};
