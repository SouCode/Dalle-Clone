const express = require('express');
const cloudinary = require('cloudinary').v2;
const Post = require('../mongodb/models/post.js');
require('dotenv').config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Get All Post
router.route('/').get(async(req, res) => {
    try{
        const posts = await Post.find({});

        res.status(200).json({ success: true, data:posts })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
});

//Create a Post
router.route('/create').post(async(req, res) => {
    try {
      const { name, prompt, photo } = req.body;
      const photoUrl = await cloudinary.uploader.upload(photo, { resource_type: "auto" });  // Add { resource_type: "auto" } to allow base64
      
      const newPost = await Post.create({
        name,
        prompt,
        photo: photoUrl.url,
      });
      res.status(200).json({ success: true, data: newPost });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message});
    }
  });
  
module.exports = router;
