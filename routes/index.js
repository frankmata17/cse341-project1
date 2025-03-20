const express = require('express');
const router = express.Router();

// Middleware to catch errors in route handling
router.use((req, res, next) => {
  next();
});

// Route for Swagger
router.use('/swagger', require('./swagger'));

// Route to test the API
router.get('/', (req, res) => {
  res.send('Hello World');
});

// Route for contacts (correct path and middleware usage)
router.use('/contacts', require('./contacts'));

// Error handling middleware for invalid routes
router.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = router;
