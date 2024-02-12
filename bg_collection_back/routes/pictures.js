const express = require('express');
const router = express.Router();
const pictureController = require('../controllers/pictureController');

router.post('/pictures/add', pictureController.create);
router.get('/pictures/game/:gameid', pictureController.getAllByGameId);
router.get('/pictures/:id', pictureController.getPicture);
router.put('/pictures/:id', pictureController.updatePicture);
router.delete('/pictures/:id', pictureController.deletePicture);

module.exports = router;

