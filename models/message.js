const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  title: { type: String, required: true, maxLength: 100 },
  timestamp: { type: Date, required: true, default: Date.now },
  message_text: { type: String, required: true, maxLength: 300 },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

// Export model
module.exports = mongoose.model("Message", MessageSchema);
