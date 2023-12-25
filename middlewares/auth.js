const { getuser, getuserJWT } = require("../services/auth.js");
const Session = require("../models/session.js");
const User = require("../models/user.js");

async function restrictToLoggedinUserOnly(req, res, next) {
  console.log("cookies", req.cookies);
  const userUid = req.cookies.uid;
  console.log("userUid", userUid);
  if (!userUid) {
    console.log("no useruid");
    return res.redirect("/login");
  }
  // const user = await getuser(userUid);//actually i am using inmemory session technique here 
  const session = await Session.findOne({sessionId:userUid});// here i am storing session in my db 
  if(!session){
    return res.redirect("/login");
  }
  const user=await User.findById(session.userId);

  console.log("found user", user);
  if (!user) {
    console.log("no user with the session ");
    return res.redirect("/login");
  }
  req.user = user; //jaise hi login kiya user ko header me daal dia taki uss login session me user kaa jaroorat padhe to user kr lenge
  next();
}
async function restrictToLoggedinUserOnlyJWT(req, res, next) {
  // console.log("cookies",req.cookies);
  const token = req.cookies.uid1;
  // console.log("token",token);
  if (!token) {
    console.log("no token");
    return res.redirect("/login");
  }
  const user = await getuserJWT(token);
  console.log("found user", user);
  if (!user) {
    console.log("no user with the token");
    return res.redirect("/login");
  }
  req.user = user; //jaise hi login kiya user ko header me daal dia taki uss login session me user kaa jaroorat padhe to use kr lenge
  next();
}
module.exports = { restrictToLoggedinUserOnly, restrictToLoggedinUserOnlyJWT };
