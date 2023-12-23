const express = require("express");
const router = express.Router();
const {HandleUsersignup,HandleUserlogin}=require("../controllers/user.js");

router.post("/",HandleUsersignup);
router.post("/login",HandleUserlogin);

module.exports=router;