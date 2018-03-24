const express = require('express');
const router = express.Router();

const roomController = require('../controllers/roomController');

// API 
router.get('/room', roomController.getRoom);

module.exports = router;

