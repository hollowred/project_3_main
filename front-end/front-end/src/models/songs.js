const mongoose = require('mongoose')

const songsSchema = new mongoose.Schema({
  artist: String,
  album: String,
  song: String,
  genre: String,
  albumImage: String

})

const Song = mongoose.model('Song', songsSchema);

module.exports = Song;
