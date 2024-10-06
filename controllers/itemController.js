const itemModel = require('../models/itemModel');

// Render the home page and fetch all items
const renderHomePage = (req, res) => {
    itemModel.getAllItems((err, items) => {
        if (err) {
            console.error('Error fetching items:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.render('index', { items });
    });
};

// Add a new item
const addItem = (req, res) => {
    const { item, description, quantity, price } = req.body;
    itemModel.addItem(item, description, quantity, price, (err) => {
        if (err) {
            console.error('Error adding item:', err);
            return res.status(500).send('Error adding item');
        }
        res.redirect('/');
    });
};

// Update item quantity
const updateItemQuantity = (req, res) => {
    const { id, newQuantity } = req.body;
    itemModel.updateQuantity(id, newQuantity, (err) => {
        if (err) {
            console.error('Error updating quantity:', err);
            return res.status(500).send('Error updating quantity in the database');
        }
        res.json({ success: true });
    });
};

module.exports = {
    renderHomePage,
    addItem,
    updateItemQuantity
};
