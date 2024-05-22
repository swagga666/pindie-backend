const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const bodyParser = require("body-parser");

const connectToDataBase = require("./database/connect");

const apiRouter = require("./routes/api");
const pagesRouter = require("./routes/page");
const cors = require("./middlewares/cors");

const PORT = 3001;
const app = express();
connectToDataBase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  apiRouter,
  pagesRouter,
);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
