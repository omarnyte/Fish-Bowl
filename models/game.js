const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
mongoose.Promise = global.Promise;

const clueSchema = new Schema({
    author: String,
    phrase: {
        type: String,
        validate: {
            validator: function(v) {
                const phraseLength = v.split(' ').length;
                return phraseLength > 0 && phraseLength < 4;
            },
            message: 'Clue phrase must be three words or less.'
        }
    }
});

const roundSchema = new Schema({
    guessedClues: [clueSchema],
    remainingClues: [clueSchema],
    scores: Object
});

const roundsSchema = new Schema({
    taboo: roundSchema,
    charades: roundSchema,
    password: roundSchema
});

const teamSchema = new Schema({
    name: {
        type: String,
        required: 'Team must have a name',
        maxlength: [50, 'Team names must be shorter than 50 characters long.']
    },
    players: [String] // this should be an array of players' usernames
});

const gameSchema = new Schema({
    currentRound: {
        type: String,
        enum: ['Taboo', 'Charades', 'Password'],
        default: 'Taboo'
    },
    rounds: [roundsSchema],
    clues: [clueSchema],
    teams: [teamSchema],
    currentTeamIndex: {
        type: Number,
        default: 0
    },
    currentPlayerIndex: {
        type: Number,
        default: 0
    },
    // this is vague for now, but eventually let's figure out 
    // how to store game scores appropriately
    scores: Object
});

module.exports = mongoose.model('Game', gameSchema);