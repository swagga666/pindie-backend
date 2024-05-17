const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  req.gamesArray = await games
    .find({})
    .populate("categories")
    .populate({ path: "users", slelect: "-password" });
  next();
};

const createGame = async (req, res, next) => {
  try {
    req.game = await games.create(req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка создания игры" });
  }
};

const findGameById = async (req, res, next) => {
  try {
    req.game = games
      .findById(req.params.id)
      .populate("categories")
      .populate("users");
    next();
  } catch (error) {
    res.status(404).send({ message: "Игра не найдена" });
  }
};

const updateGame = async (req, res, next) => {
  try {
    req.game = await games.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка обновления игры" });
  }
};

const deleteGame = async (req, res, next) => {
  try {
    req.game = await games.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка удаления игры" });
  }
};

module.exports = {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
};
