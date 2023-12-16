const express = require("express");
const router = express.Router();
const {
  HandleGenerateShortUrl,
  HandleRedirectUrl,
  HandleGetAnalytics,
} = require("../controllers/url.js");

router.post("/", HandleGenerateShortUrl);
router.get("/:shortId", HandleRedirectUrl);
router.get("/anaytics/:shortId", HandleGetAnalytics);

module.exports = router;
