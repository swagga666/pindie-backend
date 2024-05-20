/* опечатка в const { sendDashboard } = require("../constrollers/auth"); */
const { sendDashboard, sendIndex } = require("../controllers/auth");
const { checkCookiesJWT, checkAuth } = require("../middlewares/auth");

const pagesRouter = require("express").Router();

pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);
/* нужно написать функции sendIndex и sendDashboard в controllers */
pagesRouter.get("/", sendIndex);

module.exports = pagesRouter;
