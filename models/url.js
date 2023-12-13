const mongoose = require("mongoose");
const validUrl=require("valid-url");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    clickCount:{
        type:Number,
        default:0
    },

    visitHistory:[{
      type:Number
    }]
  },
  { timestamps: true }
);

const URL=mongoose.model('url',urlSchema);  

module.exports=URL;
