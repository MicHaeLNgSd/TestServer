const User = require("./models/UserModels"),
  userController = require("./controllers/UserController.js");

module.exports = function (app) {
  /**
   *@swagger
   *  /user:
   *     get:
   *       tags: [User]
   *       description: Get all users
   *       responses:
   *         200:
   *           description: "success"
   *           content:
   *             application/json:
   *               schema:
   *                 type: array
   *                 items:
   *                   properties:
   *                     name:
   *                       type: string
   *                       example: yaroslav
   *                     age:
   *                       type: integer
   *                       example: 18
   */
  app.get("/user", userController.getListOfUsers);
  app.get("/user/:name", userController.getUsersByName);
  app.post("/user", userController.addUser);
};
