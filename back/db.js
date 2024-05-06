const mysql = require('mysql');

const db = mysql.createConnection({
    host: '176.144.130.230',
    user: 'adrien',
    password: 'hfN@anoYQ246T#cdeuwY*aHr',
    database: 'HighBaseCode'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = db;