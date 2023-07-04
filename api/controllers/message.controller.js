const sendmail = require("../config/mailer.config");
const { SuccessResponse } = require("../utils/Responses/Succes.response");
const { messageService } = require("../services/message.service");
const messageController = {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  sendMessage: async (req, res, next) => {
    const { message, email, name } = req.body;
    messageService.sendMessage({ message, email, name });
    return res
      .status(200)
      .json(new SuccessResponse("message bien envoyé", 200));
  },
};
module.exports = messageController;
