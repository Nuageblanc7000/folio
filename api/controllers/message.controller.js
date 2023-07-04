const sendmail = require("../config/mailer.config");
const { ErrorResponse } = require("../utils/Responses/Error.response");
const { SuccessResponse } = require("../utils/Responses/Succes.response");
const messageController = {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  sendMessage: async (req, res, next) => {
    const { message, email, name } = req.body;
    console.log(message, email, name);
    return res
      .status(200)
      .json(new SuccessResponse(`${(message, email, name)}`, 200));
    // } catch (e) {
    //   console.log(e);
    //   return res.status(400).json(e);
    // }
  },
};
module.exports = messageController;
