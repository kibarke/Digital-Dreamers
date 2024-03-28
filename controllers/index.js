const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware setup
app.use(express.static('public'));
app.use(express.json());

// Routes setup
app.use('/', require('./routes/index'));
// More routes can be added here

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
