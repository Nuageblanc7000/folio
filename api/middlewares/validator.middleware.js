const fileService = require("../services/file.service");

const validatorModelMiddleware = (schema) => {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  return async (req, res, next) => {
    try {
      const body = req.body;
      if ((req.files, body?.images)) {
        body.images = req.files.map((f) => (f = { path: f.filename }));
      }
      if (req.body.technologies && req.body.technologies?.length > 0) {
        req.body.technologies = req.body.technologies.map((t) => parseInt(t));
      }
      const project = await schema.validate(body, { abortEarly: false });
    } catch (err) {
      if (req.files || req.file) {
        const file = req.files ? req.files : req.file;
        fileService.deleteFile(file, (err) => {
          if (err) {
            return next(err);
          }
        });
      }
      return next(err);
    }
    return next();
  };
};
module.exports = validatorModelMiddleware;
