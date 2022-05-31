// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'






const App =()=> {
//  const [newRecord, setRecord] = useState(false)
  const [newArtist, setArtist] = useState('')
  const [newAlbum, setAlbum] = useState('')
  const [newSong, setSong] = useState("")
  const [songs, setSongs] = useState([]);
  const [newGenre, setGenre] = useState("")

  const [newAlbumImage, setAlbumImage] = useState("")


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
      setSongs(response.data)
      })
    })
  }

  const handleDelete = (event)=>{
    axios
        .delete(`http://localhost:3000/song/${event._id}`)
        .then(()=>{
            axios
                .get('http://localhost:3000/song')
                .then((response)=>{
                    setSongs(response.data)
                })
        })
  }


  useEffect(()=>{
    axios.get('http://localhost:3000/song').then((response)=>{
      setSongs(response.data)
    })
  }, [])



  return (
    <>
    <h1 className="title">PlayList</h1>
    <section>
    <div className='play-list'>
    <form onSubmit={handleNewSongFormSubmit}>

    Artist: <input type="text"onChange={handleNewArtist}/><br/>

       Album: <input type="text" onChange={handleNewAlbum}/><br/>
       Song:  <input type="text" onChange={handleNewSong}/><br/>
       Genre: <input type="text" onChange={handleNewGenre}/><br/>
       Album Cover:  <input type="url" onChange={handleNewAlbumImage}/><br/>

       <input type="submit" value="Add"/>
    </form>
    </div>

    </section>


    <h3 className='header'> Available Songs </h3>

  <div key={songs._id}>
    <div>
      {
        songs.map((song)=> {
          return <li>
            Artist: {song.artist}
            <br></br>
           Song: {song.song}
           <br></br>
           Album: {song.album}
           <br></br>
           Genre: {song.genre}
           <br></br>
         <img src={song.albumImage} className="album-image"/>
          <br></br>
          <button onClick={(event) => {handleDelete(song)}}>Delete Song</button>
          </li>
        })
      }
    </div>
  </div>
  </>

  );
}

export default App;
