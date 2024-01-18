const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

module.exports = function (app, express) {
  app.use(cors({ credentials: true, origin: ["https://wingame.iran.liara.run", "http://localhost:3000","https://wingame.liara.run"] }));
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/uploads/images", express.static(path.join("uploads", "images")));
};
// "MONGO_URI": "mongodb+srv://amirtk7:amir1379@cluster0.vidui5q.mongodb.net/test"
// mongodb+srv://digita:digitaWebShop@digita-webshop.a8e7xyg.mongodb.net/test