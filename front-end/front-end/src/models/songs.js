const mongoose = require('mongoose')

<<<<<<< HEAD:models/songs.js
const songsSchema = new mongoose.Schema({
  artist: String,
  album: String,
  song: String,
  genre: String,
  albumImage: String

})

const Song = mongoose.model('Song', songsSchema);
=======
const songSchema = new mongoose.Schema ({
  Artist: String,
  Album: String,
  Song: String,
  Genre: String,  
  albumImage: String,
  
})

const Songs = mongoose.model('songs', songSchema)
>>>>>>> 84da5b9 (commit on front end):front-end/front-end/src/models/songs.js

module.exports = Song;
