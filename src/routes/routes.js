const express = require("express");
const Employee = require("../models/employee");
const Product = require("../models/product");
const router = express.Router();

const getCombData = async (req, res) => {
  try {
    const employees = await Employee.find();
    const products = await Product.find();
    res.json({ employees, products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCombData };
router.get("/combined", getCombData);

module.exports = router;
