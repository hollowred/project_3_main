const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Songs = require('./models/songs');
const app = express();

app.use(express.json());
app.use(cors());



//CREATE
app.post('/song', (req, res) => {
    Songs.create(req.body, (err, createdSong) => {
        res.json(createdSong)

    })
})
//INDEX
app.get('/song', (req, res) => {
    Songs.find({}, (err, foundSong) => {
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
app.put('/song/:id', (req,res)=>{
    Songs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedSong)=>{
        res.json(updatedSong)
    })

   })


app.listen(3000, () => {
    console.log('listening...');
})

mongoose.connect('mongodb://localhost:27017/songs')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
})
