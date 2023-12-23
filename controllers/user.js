const User = require("../models/user.js");
const { v4: uuidv4 } = require("uuid");
const { setuser, getuser } = require("../services/auth.js");

async function HandleUsersignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  res.redirect("/");
}

async function HandleUserlogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  // console.log("User", user);
  if (!user) {
    return res.render("login", { error: "invalid username or password " });
  }
  const sessionId = uuidv4();
  setuser(sessionId, user);
  res.cookie("uid", sessionId, {
    httpOnly: true
  });
  console.log("cookie value in user.js login function", sessionId);
  return res.redirect("/");
  // console.log("cookie value in user.js login function", sessionId);
}
module.exports = {
  HandleUsersignup,
  HandleUserlogin,
};
