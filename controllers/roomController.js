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
    const room = await (new Room());
    room.players[0] = {username: req.body.username};

    // create random, unique slug
    let slug = Math.random().toString(36).substr(2, 5);
//     while (Room.find({slug})) {
//         slug = Math.random().toString(36).substr(2, 5);
//     }
    room.slug = slug;
    room.save();
    
    res.json(room)
};

