const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
mongoose.Promise = global.Promise;

const playerSchema = new Schema({
    username: {
        type: String,
        required: "Username is required"
    }
});

const roomSchema = new Schema({
    slug: {
        type: String,
        required: "Slug is required"
    },
    maxPlayers: {
        type: Number,
        default: 12
    },
    currentGame: {
        type: ObjectId,
        ref: 'Game'
    },
    players: [playerSchema],
    previousGames: Object // maybe unnecessary
});

// indexes 
roomSchema.index({
    slug: 'text',
});


module.exports = mongoose.model('Room', roomSchema);
