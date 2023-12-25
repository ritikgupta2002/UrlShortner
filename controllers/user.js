const User = require("../models/user.js");
const Session = require("../models/session.js");
const { v4: uuidv4 } = require("uuid");
const { setuser, setuserJWT } = require("../services/auth.js");

async function HandleUsersignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  res.redirect("/login");
}

async function HandleUserlogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  // console.log("User", user);
  if (!user) {
    return res.render("login", { error: "invalid username or password " });
  }
  const sessionId = uuidv4(); //basic auth

  //save session to DB
  await Session.create({
    sessionId,
    userId: user._id,
  });

  //set in memory session ,store the mapping in server
  //setuser(sessionId, user); //basic auth

  res.cookie("uid", sessionId, {
    httpOnly: true,
  });

  console.log("cookie value in user.js login function", sessionId);

  return res.redirect("/");
}

async function HandleUserloginJWT(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  // console.log("User", user);
  if (!user) {
    return res.render("login", { error: "invalid username or password " });
  }
  const token = await setuserJWT(user); //jwt auth
  res.cookie("uid1", token, {
    httpOnly: true,
  });
  //set the cookie value to token if jwt auth , otherwise for basic auth set it to session id
  console.log("cookie value in user.js login function", token);
  return res.redirect("/");
}
module.exports = {
  HandleUsersignup,
  HandleUserlogin,
  HandleUserloginJWT,
};
