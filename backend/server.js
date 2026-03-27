const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");

connectDB(); // ✅ ADD HERE

const app = express();
app.use(cors());

app.use(express.json());

const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});