const mongoose = require("mongoose");
const emplSchema = new mongoose.Schema({ name: String, position: String });
module.exports = mongoose.model("Employee", emplSchema);
