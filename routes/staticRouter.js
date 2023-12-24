const express = require("express");
const router = express.Router();
const URL = require("../models/url");
const User = require("../models/user.js");

router.get("/", async (req, res) => {
  // const allUrls = await URL.find({});
  // return res.render("home", { urls: allUrls });
  return res.render("home");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

router.get("/signin", (req, res) => {
  return res.render("login");
});

module.exports = router;
