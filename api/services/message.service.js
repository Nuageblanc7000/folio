const MessageDTO = require("../DTO/message.dto");
const DBMYSQL = require("../models");

const messageService = {
  sendMessage: async (message) => {
    const dtoMessage = new MessageDTO(message);
    const messageSend = await DBMYSQL.Mesage.create(dtoMessage);

    return new MessageDTO(messageSend);
  },
};
module.exports = {
  messageService,
};
