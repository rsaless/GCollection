const express = require('express');
const router = express.Router();
const gameTagController = require('../controllers/gameTagController');

router.post('/gametags/add', gameTagController.create);
router.delete('/gametags/:gameid/:tagid', gameTagController.deleteGT);
router.get('/gametags/game/:gameid', gameTagController.getGameTagsByGame);
router.get('/gametags/tag/:tagid', gameTagController.getGameTagsByTag);
router.delete('/gametags/game/:gameid', gameTagController.deleteTagByGame);
router.delete('/gametags/tag/:tagid', gameTagController.deleteTagByTag);

module.exports = router;

