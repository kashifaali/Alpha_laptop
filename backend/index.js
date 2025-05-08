import express from "express";
import mongoose from "mongoose";
import User from './models/User.js';
import cors from "cors";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import passportLocalMongoose from "passport-local-mongoose";
import dotenv from "dotenv";
import laptops from "./server.js";
import Laptop from "./models/Laptop.js";
import Blog from './models/Blog.js';

dotenv.config();
const app = express();
app.use(express.json());


app.use(cors());

const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;

async function DBconnection(){
    try{
        await mongoose.connect(URL);
        console.log("database connect successfully");
    } catch(error){
        console.error("Error caught:", error.message);
    }
}

DBconnection();

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
   

app.listen(PORT, ()=>{
    console.log(`app is listen at this port ${PORT} `);
});


app.post("/api/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "This username is already registered. Please try another." });
    }

    // Proceed to save user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/login",(req,res)=>{
  const loginuserdata = req.body;
  console.log(loginuserdata);
})





app.get("/api/data",async(req,res)=>{
    const dataoflaptops = await Laptop.find();
    res.send(dataoflaptops);
})


app.post("/api/addnew", async (req, res) => {
    try {
      const addLaptop = new Laptop(req.body);
      const savedLaptop = await addLaptop.save();
      res.status(201).json({ message: "Laptop saved successfully", data: savedLaptop });
    } catch (error) {
      console.error("Error saving laptop:", error);
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/blog",async(req,res)=>{
    const dataofblogs = await Blog.find();
    res.send(dataofblogs);
})

app.post("/api/addblog", async(req, res)=>{
  try{
  const addblog = new Blog(req.body);
  const savedaddblog = await addblog.save();
  res.status(201).json({ message: "blog saved successfully", data: savedaddblog });
  }catch(error){
    console.error("Error saving laptop:", error);
      res.status(500).json({ error: error.message });
  }
  
})

  





// app.get("/",(req,res)=>{
//     res.send("welcome");
// })