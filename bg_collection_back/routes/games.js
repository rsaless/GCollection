const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesController');

router.post('/games/add', gamesController.createGame);
router.get('/games/all', gamesController.getAll);
router.get('/games/:id', gamesController.getGame);
router.put('/games/:id', gamesController.updateGame);
router.delete('/games/:id', gamesController.deleteGame);

module.exports = router;