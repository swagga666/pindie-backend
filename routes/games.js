const gamesRouter = require("express").Router();

const {
  sendAllGames,
  sendGameCreated,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");
const { checkAuth } = require("../middlewares/auth");
const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
} = require("../middlewares/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  checkAuth,
  createGame,
  sendGameCreated
);
checkAuth,
  gamesRouter.put(
    "/games/:id",
    findGameById,
    checkAuth,
    updateGame,
    sendGameUpdated
  );
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;
