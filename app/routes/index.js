const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});

router.get('/puggz', (req, res) => {
 res.render('pugly', {
  food: 'toast',
  drink: req.query.drink || 'milk',
 });
});

module.exports = router;
