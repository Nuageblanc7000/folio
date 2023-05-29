const ErrorCode = require("../utils/Responses/code.error");

const authenticatedMiddleware = () => {
  return async (req, res, next) => {
    if (!req.user) {
      return next({ name: ErrorCode.ACCESS_DENIED });
    }
    return next();
  };
};

module.exports = authenticatedMiddleware;
