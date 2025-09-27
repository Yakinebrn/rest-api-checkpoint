import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import UserModel from "./models/User.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 6750;

// Connect DB
mongoose
  .connect(process.env.MONGODB_URL, {
    dbName: process.env.MONGODB_DBNAME || "checkpoint",
  })
  .then(() => {
    console.log("✅ DB is connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err.message);
    process.exit(-1);
  });

// Routes
app.get("/api/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json({ data: users });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/api/users", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const newUser = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.json({ data: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put("/api/users/:id", async (req, res) => {
  const { id: _id } = req.params;
  try {
    const userUpdated = await UserModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.json({ message: "✅ User updated", data: userUpdated });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  const { id: _id } = req.params;
  try {
    const userDeleted = await UserModel.deleteOne({ _id });
    res.json({ message: "✅ User deleted", data: userDeleted });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
