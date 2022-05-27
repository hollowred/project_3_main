const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


app.get('/songs', (req, res) => {
        res.json('Hello')
    // Monkey.find({}, (err, songsHome) => {
    //     res.json(songsHome)
    })
//})


app.listen(3000, () => {
    console.log('listening...');
})

mongoose.connect('mongodb://localhost:27017/merncrud')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
})
