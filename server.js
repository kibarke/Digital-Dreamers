const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers');
<<<<<<< Updated upstream
const session = require('express-session');


=======
>>>>>>> Stashed changes
const hbs = exphbs.create({});

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
<<<<<<< Updated upstream


// Starts the server to begin listening
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
=======

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
>>>>>>> Stashed changes
});
