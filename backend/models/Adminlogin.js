// models/adminlogin.js
import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const { Schema } = mongoose;

const Adminlogin = new Schema({
  email: {
    type: String,
    required: true,
  }
});

Adminlogin.plugin(passportLocalMongoose);

const Admin = mongoose.model("Admin", Adminlogin);
export default Admin;
