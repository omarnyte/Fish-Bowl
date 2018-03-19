const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const roomSchema = new Schema({
    
});


module.exports = mongoose.model('Room', roomSchema);
