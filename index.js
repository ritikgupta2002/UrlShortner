const express = require("express");
const { connectMongodb } = require("./connection.js");
const cookieParser=require('cookie-parser');  
const{restrictToLoggedinUserOnly,restrictToLoggedinUserOnlyJWT}=require("./middlewares/auth.js");
const URL = require("./models/url.js");

const UrlRouter = require("./routes/url.js");
const StaticRouter = require("./routes/staticRouter.js");
const UserRouter = require("./routes/user.js");
const app = express();
connectMongodb("mongodb://127.0.0.1:27017/url-shortener")
  .then(() => console.log("mongodb connected "))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/url", restrictToLoggedinUserOnlyJWT,UrlRouter);
app.use("/user", UserRouter);
app.use("/",StaticRouter);

app.listen(8004, () => {
  console.log("Server started on PORT 8004");
});
