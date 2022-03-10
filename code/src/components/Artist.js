import React from 'react'


 // Creating a new component
const Artist = (props) => {
   return (

      <div className="artist">
        <a className="linked-artist" href={props.artistLink}> 
        <p>{props.artistName}{props.isLast ? "" : ","}</p>
        </a>
         </div>

   ) 
   }


export default Artist 