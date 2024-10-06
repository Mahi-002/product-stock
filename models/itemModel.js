const db = require('../database/db');

// Fetch all items from the database
const getAllItems = (callback) => {
    const sql = 'SELECT * FROM items';
    db.query(sql, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Add a new item to the database
const addItem = (item, description, quantity, price, callback) => {
    const sql = 'INSERT INTO items (item, description, quantity, price) VALUES (?, ?, ?, ?)';
    db.query(sql, [item, description, quantity, price], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

// Update item quantity
const updateQuantity = (id, quantity, callback) => {
    const sql = 'UPDATE items SET quantity = ? WHERE id = ?';
    db.query(sql, [quantity, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

module.exports = {
    getAllItems,
    addItem,
    updateQuantity
};
