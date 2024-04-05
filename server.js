const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const fs = require('fs');

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

// svg stuff
const calorieSvgContent = fs.readFileSync('./public/images/calories.svg', 'utf-8');

const heartSvgContent = fs.readFileSync('./public/images/heartrate.svg', 'utf-8');

app.get('/', (req, res) => {
  res.render('index', { calorieSvgContent });
});

app.get('/', (req, res) => {
  res.render('index', { heartSvgContent });
});


// Starts the server to begin listening
app.listen(PORT, () => {

  console.log('Server listening on: http://localhost:' + PORT);
});
