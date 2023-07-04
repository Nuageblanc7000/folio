const userController = require("../controllers/user.controller");
const roleMiddleware = require("../middlewares/role.mddleware");

const userRouter = require("express").Router();
userRouter.route("/").get(roleMiddleware(), userController.getAll);
userRouter
  .route("/:id")
  .get(userController.getByid)
  .put(userController.update)
  .delete(userController.delete);
module.exports = userRouter;
