const express = require('express');
const router = express.Router();

// Test route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Express Router!' });
});

module.exports = router;