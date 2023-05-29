const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const DBMYSQL = require("../models");
const { app } = require("../app");

//si jamais je veux utiliser des sessions pour stocker l'utilisateur)
//AUTH AVEC SESSIONS
// const sessionStore = new SequelizeStore({
//   db: DBMYSQL.sequelize,
//   checkExpirationInterval: 60 * 60 * 24 * 14 * 1000,
//   expiration: 60 * 60 * 24 * 14 * 1000,
// });

// // Configurez la session

// (sessionConfig = {
//   name: "rid",
//   secret: process.env.SECRET_COOKIE_KEY,
//   resave: false,
//   saveUninitialized: true,
//   store: sessionStore,
//   cookie: {
//     maxAge: 60 * 60 * 24 * 14 * 1000,
//     httpOnly: true,
//     signed: process.env.SECRET_COOKIE_KEY,
//   },
// }),
//   app.use(session(sessionConfig));
