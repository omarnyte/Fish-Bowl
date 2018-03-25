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

exports.addClues = async (req, res) => {
    const game = await Game.findById(req.params.gameId);
    console.log(req.session)

    req.body.clues.forEach(clue => {
        game.clues.push({
            // use session middleware to determine clue author
            phrase: clue
        })
    });
    game.save();

    // if a phrase is too long, the line below sends the game object with the invalid phrases, but they don't actually get saved. It does console log an error, though. 
    res.json(game);
}
