const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');

router.post('/tags/add', tagController.create);
router.get('/tags/all', tagController.getAll);
router.get('/tags/:id', tagController.getTag);
router.put('/tags/:id', tagController.updateTag);
router.delete('/tags/:id', tagController.deleteTag);

module.exports = router;
