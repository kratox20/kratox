const mysql = require('mysql');

// Create connection to MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'register_page'
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database');
});

// Query to retrieve data from 'clients' table
connection.query('SELECT * FROM clients', (error, results, fields) => {
    if (error) {
        console.error('Error retrieving data: ' + error);
        return;
    }
    console.log('Data from clients table:');
    console.log(results); // Display the fetched data
});

// Close the connection
connection.end();