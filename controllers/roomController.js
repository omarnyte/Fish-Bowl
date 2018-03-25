const mongoose = require('mongoose');
const Room = mongoose.model('Room');

exports.getRoom = async (req, res) => {
    const room = await Room.findOne({ slug: req.params.roomId });
    if (room) {
        res.json(room);
    } else {
        // flash no room found 
        res.send('no room found');
    }
};

exports.createRoom = async (req, res) => {
    const room = await (new Room());
    room.players[0] = req.body.username;

    // create random, unique slug
    let slug = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
    while (Room.find({slug})) {
        slug = Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
    }
    rooms.slug = slug;
    room.save();
    
    res.json(room)
};

