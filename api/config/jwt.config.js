const DBMYSQL = require("../models");
const ErrorCode = require("../utils/Responses/code.error");
const { decode, generate } = require("../utils/jwt.utils");
const { app } = require("../app");

/**
 * Middleware qui vérifie si l'utilisateur est authentifié.
 *
 * @function
 * @returns {function(import("express").Request,import("express").Response,import("express").NextFunction)} Middleware express
 */
const addJwtHelper = (req, res, next) => {
  req.isAuthenticated = async () => !!req.user;
  req.logout = async () => await res.clearCookie("token");
  req.login = async (user) => {
    const token = await generate(user);
    await res.cookie("token", token);
    return token;
  };
  return next();
};

/**
 * Vérifie si le token est expiré et génère un nouveau token si nécessaire.
 *
 * @param {object} token - Token à vérifier
 * @param {object} res - Objet Response d'Express
 * @returns {Promise<object>} - Le token décodé et mis à jour
 * @throws {Error} - Lève une erreur si le token est expiré
 */
const checkExperiationToken = async (token, res) => {
  const tokenExp = token.exp;
  const nowInSec = Math.floor(Date.now() / 1000);
  if (nowInSec <= tokenExp) {
    console.log("token encore bon");
    return token;
  } else if (nowInSec > tokenExp && nowInSec - tokenExp < 60 * 60 * 24) {
    console.log("token expiré depuis un jour de plus que celui autorisé");
    const refreshToken = await generate({ id: token.id, role: token.role });
    console.log(refreshToken, "refresh---->");
    res.cookie("token", refreshToken);
    return await decode(refreshToken);
  } else {
    throw new Error("Token expired");
  }
};

/**
 * Middleware qui extrait l'utilisateur à partir du token et le place dans la requête.
 *
 * @param {import("express").Request} req - Objet Request d'Express
 * @param {import("express").Response} res - Objet Response d'Express
 * @param {import("express").NextFunction} next - Fonction next d'Express
 * @returns {Promise<void>} - Ne retourne rien
 */
const extractUserFromToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      let decodeJwt = await decode(token);
      decodeJwt = await checkExperiationToken(decodeJwt, res);
      const user = await DBMYSQL.User.findOne({ where: { id: decodeJwt.id } });
      if (!user) {
        return next({ name: ErrorCode.ACCESS_DENIED });
      }
      req.user = user;
    } catch (err) {
      return next(err);
    }
  }
  return next();
};

app.use(extractUserFromToken);
app.use(addJwtHelper);
