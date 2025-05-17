const mongoose = require("mongoose");
const prodSchema = new mongoose.Schema({ name: String, price: Number });
module.exports = mongoose.model("Product", prodSchema);
