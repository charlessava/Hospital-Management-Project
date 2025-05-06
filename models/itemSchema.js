const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
  ItemName: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  locationFound: { type: String, required: true },
  dateFound: { type: String, enum: ['user', 'admin'], default: 'user' },
  claimed:{type:boolean,default:false},
  { timestamps: true }})


const item = new mongoose.model("item", itemSchema);


module.exports = item







