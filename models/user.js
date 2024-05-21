const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  user_name: { type: String, required: true, unique: true, maxLength: 100 },
  password: { type: String, required: true, maxLength: 100 },
  membership_status: { type: String, required: true, maxLength: 100 }
});

// Virtual for user's full name
UserSchema.virtual("full_name").get(function () {
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }
  return fullname;
});

// Virtual for user's URL
UserSchema.virtual("url").get(function () {
  return `/user/${this._id}`;
});

// Export model
module.exports = mongoose.model("User", UserSchema);
