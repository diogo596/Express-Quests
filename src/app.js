const express = require('express');
const validateMovie = require('../middlewares/validateMovie');
const validateUser = require('../middlewares/validateUser');

const app = express();

app.use(express.json());

const movieControllers = require('./controllers/movieControllers');
const usersControllers = require('./controllers/usersControllers');

app.put('/api/movies/:id', validateMovie, movieControllers.updateMovie);
app.put('/api/users/:id', validateUser, usersControllers.updateUser);
app.post('/api/movies', validateMovie, movieControllers.postMovie);
app.post('/api/users/:id', validateUser, usersControllers.postUser);
app.get('/api/movies', movieControllers.getMovies);
app.get('/api/movies/:id', movieControllers.getMovieById);
app.get('/api/users', usersControllers.getUsers);
app.get('/api/users/:id', usersControllers.getUsersById);

module.exports = app;
