import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'





function App() {
 const [newRecord, setRecord] = useState()
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

  const handleNewSongFormSubmit = (event) =>{
    event.preventDefault()
  axios.post(
    'http://localhost:3000/song',
    {
      Artist: newArtist,
      Album: newAlbum,
      Song: newSong,
      Genre: newGenre,
      albumImage: newAlbumImage,

    }
  
  ).then(() =>{
    axios
    .get('http://localhost:3000/song').then((response) =>{
      setRecord(response.data)
    })
  })
  }


  useEffect(()=>{
    axios.get('http://localhost:3000/song').then((response)=>{
      setRecord(response.data)
    })
  }, [])


  return (
    <>
    <h1 className="title">PlayList</h1>

    <div className='play-list'>
    <form onSubmit={handleNewSongFormSubmit}>
    
    Artist: <input type="text"onChange={handleNewArtist}/><br/>

       Album: <input type="text" onChange=
       {handleNewAlbum}/>
       <br></br>
       Song:  <input type="text" onChange=
       {handleNewSong}/>
       <br></br>
       Genre: <input type="text" onChange=
       {handleNewGenre}/>
       <br></br>
       Album Cover:  <input type="text" onChange=
       {handleNewAlbumImage}/>
       <br></br>
       <input type="submit" value="ADD SONG"/>
    </form>
    
    </div>
   

 </>

  );
}

export default App;
