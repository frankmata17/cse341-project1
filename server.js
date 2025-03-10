const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🔥 MongoDB connected!"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


const contactsRoute = require('./routes/contacts');
app.use('/contacts', contactsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
