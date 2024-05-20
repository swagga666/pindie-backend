const usersRouter = require("express").Router();

const {
  sendAllUsers,
  sendUserById,
  sendUserCreated,
  sendUserUpdated,
  sendUserDeleted,
  sendMe,
} = require("../controllers/users");
const { checkAuth } = require("../middlewares/auth");
const {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
  hashPassword,
} = require("../middlewares/users");

/* добавить роут кй будет возвращать юзера */
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users:id", findUserById, sendUserById);
/* внутри запросов на изменение данных чекаем авторизацию checkAuth*/
usersRouter.post(
  "/users",
  findAllUsers,
  hashPassword,
  checkAuth,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  findUserById,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

module.exports = usersRouter;
