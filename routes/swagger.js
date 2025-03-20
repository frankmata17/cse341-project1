const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

// Serve Swagger UI for the API documentation
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Catch any errors that might occur
router.use((err, req, res, next) => {
  console.error(err.stack);  // Log the error for debugging
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

module.exports = router;
