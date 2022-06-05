// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";


 const App =()=> {
//  const [newRecord, setRecord] = useState(false)
  const [newArtist, setArtist] = useState('')
  const [newAlbum, setAlbum] = useState('')
  const [newSong, setSong] = useState("")
  const [songs, setSongs] = useState([]);
  const [newGenre, setGenre] = useState("")
  const [newVideo, setNewVideo] = useState('')
  const [newAlbumImage, setAlbumImage] = useState("")
  const [updateSong, setUpdateSong] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  const handleNewArtist = (event) => {
  setArtist(event.target.value);
  }

  const handleNewAlbum = (event)=> {
    setAlbum(event.target.value);
  }
  const handleNewVideo = (event) => {
    setNewVideo(event.target.value);
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
      video: newVideo

    }).then(() =>{
    axios.get('http://localhost:3000/song').then((response) =>{
      setSongs(response.data)
      })
    })
  }

//____DELETE

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

//___UPDATE
    const handleUpdate = (event, songsData) => {
      event.preventDefault();
      axios.put(`http://localhost:3000/song/${songsData._id}`,
        {
          artist: newArtist,
          album: newAlbum,
          song: newSong,
          genre: newGenre,
          albumImage: newAlbumImage,
          video:newVideo,
        }).then(() => {axios.get('http://localhost:3000/song').then((response) => {
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
    <form className='list' onSubmit={handleNewSongFormSubmit}>

    Artist: <input type="text"onChange={handleNewArtist}/><br/>

       Album: <input type="text" onChange={handleNewAlbum}/><br/>
       Song:  <input type="text" onChange={handleNewSong}/><br/>
       Genre: <input type="text" onChange={handleNewGenre}/><br/>
       Album Cover:  <input type="url" onChange={handleNewAlbumImage}/><br/>
       Video:  <input embedId="url" onChange={handleNewVideo}/>


       <input className='add-btn' type="submit" value="Add"/>
    </form>
    </div>

    </section>


    <h3 className='header'> TOP SONGS FROM AROUND THE WORLD </h3>

  <div key={songs._id}>
    <div className='container'>
      {
        songs.map((song)=> {
          return <div  >
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
          <div className='buttons'>
          <button className='watch-btn' onClick={() =>setShowVideo(s=>!s)} >Watch Video</button>
          { showVideo?
          <YoutubeEmbed embedId={song.video} />
          : "" }
        <br></br>
         <button className='delete-btn' onClick={(event) => {handleDelete(song)}}>Delete Song</button> <br></br>

          <button className ="update-btn" onClick={()=>setUpdateSong(s=>!s)} >Update</button>
         </div>
   { updateSong ?
   <form onSubmit ={(event)=>{handleUpdate(event, song)}}>
            Artist: <input type="text" defaultValue={song.artist} onChange={handleNewArtist}/><br/>
             Song:  <input type="text" defaultValue={song.song} onChange={handleNewSong}/><br/>
             Album: <input type="text" defaultValue={song.album} onChange={handleNewAlbum}/><br/>
             Genre: <input type="text" defaultValue={song.genre} onChange={handleNewGenre}/><br/>
             Album Cover:  <input type="url" defaultValue={song.albumImage} onChange={handleNewAlbumImage}/><br/>

             <input className='update-form' type="submit" value="Update"/>
             </form> : "" }
           </div>

        })
      }
    </div>
  </div>
  </>

  );
}

export default App;
