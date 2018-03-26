const mongoose = require('mongoose');
const Room = mongoose.model('Room');

exports.getRoom = async (req, res) => {
    const room = await Room.findOne({ slug: req.params.roomSlug });
    if (room) {
        res.json(room);
    } else {
        res.flash('No room found!');
    }
};

exports.createRoom = async (req, res) => {    
    console.log(req.body)
    const room = await (new Room());
    room.players[0] = { displayName: req.body.displayName };
    room.save();
    
    res.json(room)
};

exports.joinRoom = async (req, res) => {
    console.log(req.body)
    const room = await Room.findOne({ slug: req.params.roomSlug });
    if (!room) {
        res.flash('No room found!');
        return;   
    } 

    // should this be a model method? 
    // ensure that name doesn't already exist (can also be done real-time on the frontend with an API call)
    room.players.push({ displayName: req.body.displayName });
    Room.addPlayer(req.body.displayName);
    res.json(room);
}

