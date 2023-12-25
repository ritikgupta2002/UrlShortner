const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, unique: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required:true,
    },
    
  },
  { timestamps: true }
);

const Session=mongoose.model("sessions",sessionSchema);

module.exports=Session;
