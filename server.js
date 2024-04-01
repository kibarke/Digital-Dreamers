const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

import express from 'express';
import { engine } from 'express-handlebars';

import 'boxicons';

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
// app.use(require('/routes/routes.js'));


app.get('/', (req, res) => {
  res.render('home');
});
=======
// app.use(require(''));
>>>>>>> b02f174b426d4df90b44900dda0a5d57b5103ad1

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});