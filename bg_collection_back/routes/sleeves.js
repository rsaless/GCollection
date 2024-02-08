const express = require('express');
const router = express.Router();
const sleevesController = require('../controllers/sleevesController');

router.post('sleeves/add', sleevesController.create);
router.get('sleeves/all', sleevesController.getAll);
router.get('sleeves/:id', sleevesController.getSleeve);
router.put('sleeves/:id', sleevesController.updateSleeve);
router.delete('sleeves/:id', sleevesController.deleteSleeve);
router.put('sleeve-game/:sleeveId/:gameId', sleevesController.sleeveGame);
router.put('unsleeve-game/:sleeveId/:gameId', sleevesController.unsleeveGame);

module.exports = router;