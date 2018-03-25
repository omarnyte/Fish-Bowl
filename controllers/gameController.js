const mongoose = require('mongoose');
const Game = mongoose.model('Game');

exports.getGame = async (req, res) => {
    const game = await Game.findById(req.params.gameId);
    if (game) {
        res.json(game);
    } else {
        res.flash('No game found!');
    }
};

exports.createGame = async (req, res) => {
    const game = await (new Game().save())
    res.json(game)
}

