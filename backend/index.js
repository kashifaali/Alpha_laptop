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
import session from 'express-session'
import { isLoggedin } from "./middleware/loginmiddleware.js";
import Admin from "./models/Adminlogin.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // or your frontend URL
  credentials: true
}));


app.use(session({
  secret: process.env.SESSION_SECRET || 'default_secret',
  resave: false,
  saveUninitialized: false
}));



const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;

async function DBconnection() {
  try {
    await mongoose.connect(URL);
    console.log("database connect successfully");
  } catch (error) {
    console.error("Error caught:", error.message);
  }
}


// async function createAdmin() {
//   try {
//     const existingAdmin = await Admin.findOne({ username: 'admin' });
//     if (existingAdmin) {
//       console.log('Admin already exists.');
//       return;
//     }

//     const newAdmin = new Admin({ username: 'admin', email: 'admin@gmail.com' });
//     await Admin.register(newAdmin, 'admin123'); // replace with strong password

//     console.log('Admin created successfully.');
//   } catch (err) {
//     console.error('Error creating admin:', err);
//   }
// }

// Call it once after DB connection
DBconnection();


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.use('admin-local', new LocalStrategy(Admin.authenticate()));



passport.serializeUser((user, done) => {
  done(null, { id: user.id, type: user instanceof Admin ? 'Admin' : 'User' });
});

passport.deserializeUser(async (obj, done) => {
  try {
    if (obj.type === 'Admin') {
      const admin = await Admin.findById(obj.id);
      done(null, admin);
    } else {
      const user = await User.findById(obj.id);
      done(null, user);
    }
  } catch (err) {
    done(err);
  }
});


app.listen(PORT, () => {
  console.log(`app is listen at this port ${PORT} `);
});

//Admin login

app.get("/api/session", (req, res) => {
  if (req.isAuthenticated()) {
    const userType = req.user instanceof Admin ? 'Admin' : 'User';
    return res.json({ isAuthenticated: true, userType });
  }
  res.json({ isAuthenticated: false });
});


app.post("/api/adminlogin", (req, res, next) => {
  passport.authenticate("admin-local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({ message: "Invalid admin credentials" });
    }
    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.status(200).json({ message: "Admin login successful" });
    });
  })(req, res, next);
});


app.get("/api/adminlogin-fail", (req, res) => {
  res.status(401).json({ message: "Invalid admin credentials" });
});

app.get("/api/logout", (req, res, next) => {
  console.log("Is authenticated before logout:", req.isAuthenticated()); // debug
  req.logout((err) => {
    if (err) return next(err);
    res.json({ message: "Logout successful" });
  });
});




app.post("/api/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "This username is already registered. Please try another." });
    }

    // Proceed to save user
    const newUser = new User({ username, email });
    await User.register(newUser, password);

    res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.status(200).json({ message: "Login successful" });
    });
  })(req, res, next);
});



app.get("/api/data", async (req, res) => {
  const dataoflaptops = await Laptop.find();
  res.send(dataoflaptops);
})

app.get("/api/usersdata", async (req, res) => {
  const dataofusers = await User.find();
  res.send(dataofusers);
})

app.delete("/api/delete-user/:id", async (req,res)=>{
  try{
    const deleteuser = await User.findByIdAndDelete(req.params.id);
   if (!deleteuser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

app.put("/api/edit-laptop/:id", async (req, res) => {
  try {
    const updatedLaptop = await Laptop.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedLaptop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get("/api/blogdata", async (req, res) => {
  const dataofblogs = await Blog.find();
  res.send(dataofblogs);
})

app.delete("/api/delete-laptop/:id", async (req, res) => {
  try {
    const deletedLaptop = await Laptop.findByIdAndDelete(req.params.id);
    if (!deletedLaptop) {
      return res.status(404).json({ message: "Laptop not found" });
    }
    res.json({ message: "Laptop deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




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

app.get("/api/blog", async (req, res) => {
  const dataofblogs = await Blog.find();
  res.send(dataofblogs);
})

app.post("/api/addblog", async (req, res) => {
  try {
    const addblog = new Blog(req.body);
    const savedaddblog = await addblog.save();
    res.status(201).json({ message: "blog saved successfully", data: savedaddblog });
  } catch (error) {
    console.error("Error saving laptop:", error);
    res.status(500).json({ error: error.message });
  }

})


app.delete("/api/blog/:id", async (req, res) => {
  try {
    const deletedblog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedblog) {
      return res.status(404).json({ message: "blog not found" });
    }
    res.json({ message: "blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get("/api/blog/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/blog/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});






// app.get("/",(req,res)=>{
//     res.send("welcome");
// })