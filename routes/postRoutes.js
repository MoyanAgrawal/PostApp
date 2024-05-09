const express = require("express");
const router = express.Router();
const Post = require("../models/postModel");

// router.get("/post/new", (req, res) => {
//   res.render("post/addPost");
// });

router.get("/posts", async (req, res) => {
  const allPost = await Post.find({});
  res.status(200).json(allPost);
  // res.render("post/home", { allPost });
});

router.post("/post/new", async (req, res) => {

  // console.log("resssss",res.data);
  // console.log("reqqqqqq___",req.body)
  try {
    const newPost = await Post.create(req.body);
    res.status(200).json(newPost);
    // res.redirect("/post");
  } catch (error) {
    console.log("errrr___",error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const singlePost = await Post.findById(id);
    // console.log(singlePost);
    if (!singlePost) {
      return res.status(404).json({ error: "singlePost not found" });
    }
    res.status(200).json(singlePost);
  } catch (error) {
    console.error("Error getting post by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }

  // res.render("post/singlePost", { singlePost });
});

router.put("/post/edit/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const updatedPost = await Post.findByIdAndUpdate(postId, req.body, {
      new: true,
    });
    if (!updatedPost) {
      return res.status(404).json({ error: "post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error updating post by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



router.delete("/post/delete/:id", async (req, res) => {
  try {
    const postId  = req.params.id;
console.log('_____postid',postId);
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }

  // res.redirect("/post");
});


module.exports=router;