const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/', storeController.homePage);

router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore)

router.get('/puggz', (req, res) => {
 res.render('pugly', {
	title: 'food rocks!',
  food: 'toast',
  drink: req.query.drink || 'milk',
 });
});

module.exports = router;
