const express= require("express");
const router=express.Router();
const {HandleGenerateShortUrl,HandleRedirectUrl}=require("../controllers/url.js");


router.post('/shortId',HandleGenerateShortUrl);
router.get('/:shortId',HandleRedirectUrl);

module.exports=router;
