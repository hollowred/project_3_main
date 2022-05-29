const mongoose = require('mongoose')

const songsSchema = new mongoose.Schema({
  artist: String,
  album: String,
  aong: String,
  genre: String,
  albumImage: String,
  showEdit: Boolean
})

const Song = mongoose.model('Song', songsSchema);

module.exports = Song;
