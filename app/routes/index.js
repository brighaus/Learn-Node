const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});

router.get('/puggz', (req, res) => {
 res.render('pugly');
});

module.exports = router;
