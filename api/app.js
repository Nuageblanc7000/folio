require("dotenv").config();
if (typeof PhusionPassenger !== "undefined") {
  PhusionPassenger.configure({ autoInstall: false });
}
const { PORT, SECRET_COOKIE_KEY } = process.env;

require("express-async-errors");
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const router = require("./routes");
const ErrorCode = require("./utils/Responses/code.error");
const errorHandler = require("./utils/Responses/error.handler");
const swagerDocs = require("./docs/swager");
const DBMYSQL = require("./models");
exports.app = app;
app.use(cookieParser(SECRET_COOKIE_KEY, { secure: true, sameSite: "none" }));
app.use(cors());
app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  // res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});
require("./config/jwt.config");
app.use(express.json());
app.use(express.static(path.join(__dirname, "public", "uploads")));
app.use(express.static(path.join(__dirname, "../public")));
swagerDocs(app, PORT);

app.use("/api", router);
app.get("*", (req, res, next) => {
  const indexPath = path.join(__dirname, "../public/index.html");
  res.sendFile(indexPath);
});

DBMYSQL.sequelize
  .authenticate({})
  .then(() => console.log("mysqldb ok"))
  .catch((err) => {
    console.log(err);
  });
// DBMYSQL.sequelize.drop({ benchmark: true });
DBMYSQL.sequelize.sync();

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;

  next({ name: ErrorCode.NOT_FOUND });
});
app.use((err, req, res, next) => {
  const errorType = err.name || ErrorCode.INTERNAL_SERVER_ERROR;
  const handler = errorHandler[errorType] || errorHandler.default;
  handler(err, res);
});
if (typeof PhusionPassenger !== "undefined") {
  app.listen("passenger");
} else {
  app.listen(PORT);
}
