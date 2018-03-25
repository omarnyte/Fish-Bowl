const express = require('express');
const router = express.Router();

const { catchErrors } = require('../handlers/errorHandlers');
const gameController = require('../controllers/gameController');
const playerController = require('../controllers/playerController');
const roomController = require('../controllers/roomController');

// API 

// Room 
router.get('/api/room/:roomSlug', catchErrors(roomController.getRoom));
router.post('/api/room', catchErrors(roomController.createRoom));

// Game 
router.get('/api/game/:gameId', catchErrors(gameController.getGame));
router.post('/api/game', catchErrors(gameController.createGame));

module.exports = router;

