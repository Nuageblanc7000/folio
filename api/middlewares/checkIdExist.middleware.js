const ErrorCode = require("../utils/Responses/code.error");
const checkIdExistMiddleware = (Model) => {
  return async (req, res, next) => {
    const id = req.params.id;
    if (id) {
      const idExistInModel = await Model.findOne({ where: { id: id } });
      if (!idExistInModel) {
        next({ name: ErrorCode.NOT_FOUND });
      }
    }
    return next();
  };
};
module.exports = checkIdExistMiddleware;
