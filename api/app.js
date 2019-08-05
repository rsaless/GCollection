const express = require('express');
const app = express();
const indexRoutes = require('./Routes/index');
const usersRoutes = require('./Routes/users');

app.use('/', indexRoutes);
app.use('/users', usersRoutes);

app.listen(3000);

module.exports = app;