const express = require('express');
const router = express.Router();

const { catchErrors } = require('../handlers/errorHandlers');
const playerController = require('../controllers/playerController');
const roomController = require('../controllers/roomController');

// API 

// Room 
router.get('/api/room/:roomId', catchErrors(roomController.getRoom));
router.post('/api/room', catchErrors(roomController.createRoom));

// 

module.exports = router;

