// const passport = require("passport");
// const passportJwt = require("passport-jwt");
// const DBMYSQL = require("../models");
// const app = require("../app");
// const ExtractJwt = passportJwt.ExtractJwt;
// const Strategy = passportJwt.Strategy;

// passport.use(
//   new Strategy(
//     {
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: process.env.JWT_SECRET_KEY,
//     },
//     async (payload, done) => {
//       try {
//         const user = await DBMYSQL.User.findOne({
//           where: { id: payload.id },
//         });
//         return done(null, user);
//       } catch (err) {
//         return done(err);
//       }
//     }
//   )
// );
