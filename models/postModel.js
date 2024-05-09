const mongoose = require("mongoose");

//route handler
const postSchema = new mongoose.Schema({
  title: { type: String, required: true, default: "null" },
  imageFile: { type: String, required: true },
  caption: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: false },
});
const Post = mongoose.model("post", postSchema);
module.exports = Post
