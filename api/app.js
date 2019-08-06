const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Mongo
const bd_url = 'mongodb+srv://rafael_admin:naopodeadmin123456@gcdb-axygf.mongodb.net/test?retryWrites=true&w=majority';
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };
mongoose.connect(bd_url,options);
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', (err) => console.log('Erro na conexão com o banco de dados: ' + err))
mongoose.connection.on('disconnected', () => console.log('Aplicação desconectada do banco de dados!'))
mongoose.connection.on('connected', () => console.log('Aplicação conectada ao banco de dados!'))

//Body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
const indexRoutes = require('./Routes/index');
const usersRoutes = require('./Routes/users');
app.use('/', indexRoutes);
app.use('/users', usersRoutes);


app.listen(3000);
module.exports = app;
