const mongoose = require('mongoose')

const songSchema = new mongoose.Schema ({
  Artist: String,
  Album: String,
  Song: String,
  Genre: String,  
  albumImage: String,
  showEdit: Boolean
})

const Songs = mongoose.model('Song', songSchema)

module.exports = Songs