const URL = require("../models/url.js");
const ShortUniqueId = require("short-unique-id");

async function HandleGenerateShortUrl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({
      error: "Please provide a valid URL",
    });
  }
  const uid = new ShortUniqueId({ length: 8 });
  const shortId = uid.rnd();
  await URL.create({
    shortId: shortId,
    redirectUrl: req.body.url,
    clickCount:0,// clickCount:
    visitHistory:[],
  });
  return res.json({ id: shortId });
}

async function HandleRedirectUrl(req, res) {
    const url=await URL.findOne({shortId:req.params.shortId});
    url.clickCount++;
    url.visitHistory.push(Date.now());
    console.log("redirecting. and updating the count ....");
    await url.save();
    res.redirect(url.redirectUrl);
}



module.exports = {
  HandleGenerateShortUrl,
  HandleRedirectUrl,
};
