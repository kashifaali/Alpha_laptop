import mongoose from "mongoose";

const laptopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ram: {
    type: String,
    required: true
  },
  hardDisk: {
    type: String,
    required: true
  },
  battery: {
    type: String,
    required: true
  },
  screenSize: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  processor: {
    type: String
  },
  graphicsCard: {
    type: String
  }
}, { timestamps: true });

const Laptop = mongoose.model("Laptop", laptopSchema);
export default Laptop;
