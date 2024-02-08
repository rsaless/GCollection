const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const gamesRoutes = require('./routes/games');
const sleevesRoutes = require('./routes/sleeves');
const authRoutes = require('./routes/auth');
const authenticate = require('./middleware/authMiddleware');

const bd_url = 'mongodb+srv://rspavarina:Senhalegal1@bgcollection.fv4tap8.mongodb.net/?retryWrites=true&w=majority'

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.options('*', cors());

app.use(express.json());

mongoose.connect(bd_url, {});
mongoose.connection.on('error', (err) => console.log('Erro na conexão com o banco de dados: ' + err))
mongoose.connection.on('disconnected', () => console.log('Aplicação desconectada do banco de dados!'))
mongoose.connection.on('connected', () => console.log('Aplicação conectada ao banco de dados!'))

//app.use(authRoutes);

app.use(/*authenticate,*/ gamesRoutes);
app.use(/*authenticate,*/ sleevesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});