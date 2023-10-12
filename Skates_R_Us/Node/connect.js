const mysql = require('mysql2');

// Create a MySQL database connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '@CodeBro127*',
  database: 'skatesole'
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Execute a simple query
connection.query('SELECT * FROM users', (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error);
    return;
  }
  console.log('Query results:', results);
});

// Close the database connection when done
connection.end((err) => {
  if (err) {
    console.error('Error closing MySQL connection:', err);
    return;
  }
  console.log('MySQL connection closed');
});
