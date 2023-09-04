const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/', storeController.noobMiddleware, storeController.homePage);

router.get('/puggz', (req, res) => {
 res.render('pugly', {
	title: 'food rocks!',
  food: 'toast',
  drink: req.query.drink || 'milk',
 });
});

module.exports = router;
