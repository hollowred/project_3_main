const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Song = require('./models/songs.js')
const app = express();

app.use(express.json());
app.use(cors());


app.post('/songs', (req, res) => {
    Song.create(req.body, (err, createdSong) => {
        res.json(createdSong)
    })
})

app.get('/songs', (req, res) => {
     Song.find({}, (err, songsHome) => {
         res.json(songsHome)
    })
})

app.delete('/songs/:id', (req, res)=>{
    Song.findByIdAndRemove(req.params.id, (err, deletedSong)=>{
        res.json(deletedSong)
    })
})

app.put('/songs/:id', (req,res)=>{
    Song.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedSong)=>{
        res.json(updatedSong)
    })
})

app.listen(3000, () => {
    console.log('listening...');
})

mongoose.connect('mongodb://localhost:27017/merncrud')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
})
