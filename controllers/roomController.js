const mongoose = require('mongoose');
const Room = mongoose.model('Room');

exports.getRoom = (req, res) => {
    res.send('getting room');
};

