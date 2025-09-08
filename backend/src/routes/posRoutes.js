const express = require('express');
const router = express.Router();
const posController = require('../controllers/posController');

router.get('/items', posController.getItems);
router.post('/items', posController.addItem);

module.exports = router;