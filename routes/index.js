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
router.patch('/api/room/:roomSlug/join', catchErrors(roomController.joinRoom));
router.put('/api/room/:roomSlug/name_available', catchErrors(roomController.checkNameAvailablity));

// Game 
router.get('/api/game/:gameId', catchErrors(gameController.getGame));
router.post('/api/game', catchErrors(gameController.createGame));
router.patch('/api/game/:gameId/clues', catchErrors(gameController.addClues));

module.exports = router;

