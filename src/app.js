
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const actorsRoutes = require('./routes/actorsRoutes');
const apiGenresRoutes = require('./routes/api/genresRouter');
const apiMoviesRoutes = require('./routes/api/moviesRouter');


const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(express.json());


app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(actorsRoutes);
app.use(apiGenresRoutes)
app.use(apiMoviesRoutes)


app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
