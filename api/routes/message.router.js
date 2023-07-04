const messageController = require("../controllers/message.controller");

const messageRouter = require("express").Router();

messageRouter.post("/", messageController.sendMessage);
module.exports = messageRouter;