const express = require("express"),
  app = express(),
  port = process.env.port || 3000;
  (bodyParser = require("body-parser")),
  (routes = require("./routes.js")),
  (mongoose = require("mongoose")),
  (User = require("./models/UserModels"));
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("swagger-jsdoc");

mongoose.connect("mongodb://127.0.0.1:27017/users_db");
const swaggerOption = {
  swaggerDefinition: {
    info: {
      version: "1.1.0",
      title: "Api for users",
      description: "users",
      servers: ["http://localhost:3000/"],
    },
  },
  apis: ["./routes.js"],
};

const swaggerDocs = swaggerDoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));




// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.json());
routes(app);
app.listen(port);