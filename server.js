const express = require('express');
const mongoose = require('mongoose'); // ✅ Make sure mongoose is imported!
require('dotenv').config();

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("🔥 MongoDB connected!"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

// Import and use the contacts route
const contactsRoute = require('./routes/contacts');
app.use('/contacts', contactsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
