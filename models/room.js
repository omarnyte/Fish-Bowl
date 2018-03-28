const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
mongoose.Promise = global.Promise;

const playerSchema = new Schema({
    displayName: {
        type: String,
        required: "Display Name is required"
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

// hooks // 
// create random, unique slug
roomSchema.pre('validate', function (next) {
    // TODO make slug unique
    if (!this.isNew) return next;
    this.slug = Math.random().toString(36).substr(2, 5);
    next();
});

module.exports = mongoose.model('Room', roomSchema);
