const { limiter } = require("../config/rateLimiter.config");
const messageController = require("../controllers/message.controller");
const validatorModelMiddleware = require("../middlewares/validator.middleware");
const schemaMessage = require("../validators/message.validator");

const messageRouter = require("express").Router();

messageRouter.post(
  "/",
  limiter,
  validatorModelMiddleware(schemaMessage),
  messageController.sendMessage
);
module.exports = messageRouter;
