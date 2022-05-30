import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'





function App() {
 const [newRecord, setRecord] = useState([])
 const [newArtist, setArtist] = useState()
 const [newAlbum, setAlbum] = useState()

  const [newSong, setSong] = useState()

  const [newGenre, setGenre] = useState()

  const [newAlbumImage, setAlbumImage] = useState()


const handleNewArtist = (event) => {
  setArtist(event.target.value);
}

  const handleNewAlbum = (event)=> {
    setAlbum(event.target.value);
  }


  const handleNewSong = (event)=> {
    setSong(event.target.value);
  }

  const handleNewGenre = (event)=> {
    setGenre(event.target.value);
  }

  const handleNewAlbumImage = (event)=> {
    setAlbumImage(event.target.value);
  }
//___ CREATE
  const handleNewSongFormSubmit = (event) =>{
    event.preventDefault()
  axios.post(
    'http://localhost:3000/song',
    {
      artist: newArtist,
      album: newAlbum,
      song: newSong,
      genre: newGenre,
      albumImage: newAlbumImage,

    }).then(() =>{
    axios.get('http://localhost:3000/song').then((response) =>{
      setRecord(response.data)
    })
  })
  }


  useEffect(()=>{
    axios.get('http://localhost:3000/song').then((response)=>{
      setRecord(response.data)
    })
  }, [])

  const [showRecord, setShowRecord] = useState(false)

  return (
    <>
    <h1 className="title">PlayList</h1>

    <div className='play-list'>
    <form onSubmit={handleNewSongFormSubmit}>

    Artist: <input type="text"onChange={handleNewArtist}/><br/>

       Album: <input type="text" onChange={handleNewAlbum}/><br/>
       Song:  <input type="text" onChange={handleNewSong}/><br/>
       Genre: <input type="text" onChange={handleNewGenre}/><br/>
       Album Cover:  <input type="text" onChange={handleNewAlbumImage}/><br/>

       <input type="submit" value="Add"/>
    </form>
    </div>
    

 </>

  );
}

export default App;
