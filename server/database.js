const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database(':memory:'); // Use ':memory:' for an in-memory database, or specify a file path for a file-based database

// Create a table for storing form submissions
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS submissions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL,
            password TEXT NOT NULL
        )
    `);
});

module.exports = db;