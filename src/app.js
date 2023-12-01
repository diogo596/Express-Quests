const express = require('express');

const app = express();

app.use(express.json());

const movieControllers = require('./controllers/movieControllers');
const usersControllers = require('./controllers/usersControllers');

app.post('/api/movies', movieControllers.postMovie);
app.post('/api/users/:id', usersControllers.postUser);
app.get('/api/movies', movieControllers.getMovies);
app.get('/api/movies/:id', movieControllers.getMovieById);
app.get('/api/users', usersControllers.getUsers);
app.get('/api/users/:id', usersControllers.getUsersById);

module.exports = app;
