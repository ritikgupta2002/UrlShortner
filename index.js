const express = require("express");
const UserRouter = require("./routes/url.js");
const { connectMongodb } = require("./connection.js");
const URL = require("./models/url.js");
const app = express();
const StaticRouter=require("./routes/staticRouter.js");

connectMongodb("mongodb://127.0.0.1:27017/url-shortener")
  .then(() => console.log("mongodb connected "))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views","./views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", UserRouter);
app.use("/", StaticRouter);

app.listen(8004, () => {
  console.log("Server started on PORT 8004");
});
