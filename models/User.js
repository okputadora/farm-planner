const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const User = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  location: {
    town: {type: String},
    coords: {lat: {type: Number}, lng: {type: Number}}
  }
})

module.exports = mongoose.model('User', User);
