const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const {catchErrors} = require('../handlers/errorHandlers');

router.get('/', storeController.homePage);

router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));

router.get('/puggz', (req, res) => {
 res.render('pugly', {
	title: 'food rocks!',
  food: 'toast',
  drink: req.query.drink || 'milk',
 });
});

module.exports = router;
