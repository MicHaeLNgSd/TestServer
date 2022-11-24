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
  app.delete("/user/:userId", userController.removeUser);
  app.put("/user/:userId", userController.updateUser);
  app.get("/user/user-by-age/:from/:to", userController.getUsersByAge);
  app.delete("/remove-empty-document", userController.removeEmptyDocument);
  app.put("/add-height", userController.addFieldHeight);
  app.get("/heightest", userController.getHeightestUser);
};
