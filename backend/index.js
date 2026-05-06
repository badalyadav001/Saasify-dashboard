const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// 🔥 Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    credentials: true,
  }),
);

app.use(express.json()); // ✅ body parser

// 🔥 Routes
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

// 🔥 Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Running 🚀",
  });
});

// 🔥 MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.error("MongoDB Error ❌:", err.message);
    process.exit(1); // stop server if DB fails
  });

// 🔥 Global Error Handler (PRO LEVEL)
app.use((err, req, res, next) => {
  console.error("Global Error:", err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// 🔥 Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});

app.get("/", (req, res) => {
  res.send("API Running ✅");
});
