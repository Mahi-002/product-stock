const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',        // Your MySQL server hostname
    user: 'root',             // Your MySQL username
    password: 'Mahi@2002', // Your MySQL password
    database: 'product_stock'  // Your database name
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Export the connection for use in other files
module.exports = connection;
