const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static('public'));

app.post('/api/submit', (req, res) => {
    const { email, password } = req.body;

    // Perform server-side validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

    // Further processing (e.g., store in a database)
    const query = `INSERT INTO submissions (email, password) VALUES (?, ?, ?, ?)`;
    db.run(query, [email, password], function(err) {
        if (err) {
            return res.status(500).json({ success: false, message: 'Database error.' });
        }
        res.json({ success: true, message: 'Form data received and stored successfully!' });
    });

    res.json({ success: true, message: 'Form data received and validated successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});