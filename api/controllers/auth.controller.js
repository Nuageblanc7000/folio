const authService = require("../services/auth.service");

const { SuccessResponse } = require("../utils/Responses/Succes.response");
const ErrorCode = require("../utils/Responses/code.error");
const jwt = require("../utils/jwt.utils");
const bcrypt = require("bcrypt");

const authController = {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  register: async (req, res, next) => {
    const newUser = req.body;
    const user = await authService.register(newUser);
    const { id, role } = user;
    const token = await jwt.generate(id, role);
    res.status(201).json(new SuccessResponse({ user, token }));
  },
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  login: async (req, res, next) => {
    const { email, password } = req.body;

    const user = await authService.login(email, password);

    const t = await bcrypt.genSalt(8);
    console.log(await bcrypt.hash("kerleoguy29910", t));
    if (!user) {
      return next({ name: ErrorCode.USER_LOGIN_FAILED });
    }
    const token = await req.login(user);
    return res.status(200).json({ user, token });
  },
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  logout: async (req, res, next) => {
    req.logout();
    res.status(200).json({ message: "logout" });
  },
};

module.exports = authController;
