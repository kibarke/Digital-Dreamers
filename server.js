const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection');

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

// styling for handlebars
app.use(express.static('public'));

// // javascript for handlebars
// app.use("js");
// app.use("controllers");

// Starts the server to begin listening
app.listen(PORT, () => {

  console.log('Server listening on: http://localhost:' + PORT);
});
