const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Route to render the home page
router.get('/', itemController.renderHomePage);

// Route to add a new item
router.post('/add-item', itemController.addItem);

// Route to update item quantity
router.post('/update-quantity', itemController.updateItemQuantity);

module.exports = router;
