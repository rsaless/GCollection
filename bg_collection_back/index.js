const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const gamesRoutes = require('./routes/games');
const picturesRoutes = require('./routes/pictures'); 
const tagsRoutes = require('./routes/tags'); 
const gameTagsRoutes = require('./routes/gametags'); 
const sleevesRoutes = require('./routes/sleeves'); 

const { connectDB } = require('./db'); 
const authRoutes = require('./routes/auth');
const authenticate = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
connectDB();

//app.use(authRoutes);
app.use(/*authenticate,*/ gamesRoutes);
app.use(/*authenticate,*/ picturesRoutes); 
app.use(/*authenticate,*/ tagsRoutes); 
app.use(/*authenticate,*/ gameTagsRoutes); 
app.use(/*authenticate,*/ sleevesRoutes); 

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);});