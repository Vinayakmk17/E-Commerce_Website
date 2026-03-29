const express = require("express");
const router = express.Router();

const Order = require("../models/orderModel");

// ✅ CREATE ORDER
router.post("/", async (req, res) => {
  const { user, items, total } = req.body;

  try {
    const order = await Order.create({
      user,
      items,
      total
    });

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ GET ALL ORDERS
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;