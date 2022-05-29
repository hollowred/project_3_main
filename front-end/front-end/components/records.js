import React from 'react'

const Record = (prop) => {
    return(
      <div class="records">
        <h1>{prop.record.name}</h1>
        <img class="Album-image" src={prop.record.albumImage}/>
        <h3>Song : {prop.record.song}</h3>
        <h3>Artist : {prop.record.artist}</h3>
        <h3>Genre : {prop.record.genre}</h3>
      </div>
    )
}
export default Record