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
    const { message, mail, name } = req.body;
    try {
      const send = await sendmail(mail, message, name);
      return res
        .status(200)
        .json(new SuccessResponse("message bien envoyé", 200));
    } catch (e) {
      console.log(e);
      return res
        .status(400)
        .json(
          new ErrorResponse(
            "une erreur est survenue veuillez relancer un email",
            (path = "global"),
            (err = {}),
            (code = 400)
          )
        );
    }
  },
};
module.exports = messageController;
