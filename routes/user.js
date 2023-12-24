const express = require("express");
const router = express.Router();
const {HandleUsersignup,HandleUserloginJWT,HandleUserlogin}=require("../controllers/user.js");

router.post("/",HandleUsersignup);
router.post("/login",HandleUserloginJWT);//right now only this will work because login.ejs file me yhi set kiya hai maine
router.post("/signin",HandleUserlogin);//for basic auth 

module.exports=router;