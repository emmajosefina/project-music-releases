import React from 'react'

// import Artist from './Artist'

// Named export
const Album = (props) => {
    return (

        
        <article className="card">
        <hr />
         <a href={props.albumLink}>
            <img className="image-card" src={props.img} alt="album-cover" />
        </a>
        <h2 className="album-name">{props.albumName}</h2>
        <a className="linked-artist" href={props.artistLink}>
            <p className="linked-artist">{props.artistName}</p>
        </a> 

        {/* <div className="artistContainer">
            {props.artists.map((artist) =>

            <Artist
                artist = {artist}
                />
                )
            }
            </div> */}

        </article>
    )
}

export default Album