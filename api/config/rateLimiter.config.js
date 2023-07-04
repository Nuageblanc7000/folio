const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 1,
  message: "Trop de requêtes. Veuillez réessayer plus tard",
});

module.exports = {
  limiter,
};
