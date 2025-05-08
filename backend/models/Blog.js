import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
 
  imageUrl: {
    type: String, // Optional image URL for the blog post
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
 
});


const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
