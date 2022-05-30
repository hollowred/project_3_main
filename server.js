const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Song = require('./models/songs.js')



const app = express();

app.use(express.json());
app.use(cors());



app.post('/song', (req, res) => {
    Song.create(req.body, (err, createdSong) => {
        res.json(createdSong)
    })
})

app.get('/song', (req, res) => {
     Song.find({}, (err, songsHome) => {
         res.json(songsHome)
    })
})


// //CREATE
app.post('/song', (req, res) => {
    Song.create(req.body, (err, createdSong) => {
        res.json(createdSong)

    })
})
//INDEX
app.get('/song', (req, res) => {
    Song.find({}, (err, foundSong) => {
        res.json(foundSong)
    })
})
///DELETE
 app.delete('/song/:id', (req, res)=>{
    Songs.findByIdAndRemove(req.params.id, (err, deletedSong)=>{
         res.json(deletedSong)
     })
 })

////UPDATE
// app.put('/song/:id', (req,res)=>{
//     Songs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedSong)=>{
//         res.json(updatedSong)
//     })

//    })


app.listen(3000, () => {
    console.log('listening...');
})

mongoose.connect('mongodb://localhost:27017/song')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
})
