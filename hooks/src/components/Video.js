import React from 'react'
import { useParams } from 'react-router-dom'

function Video({movies}) {
    const {name}=useParams();
  return (
    <div style={{display:"flex" ,color:"white"}}>
        {movies.filter((movie)=>movie.name===name).map((movie,index)=>(
    <div className='pagemovie'>
        <h1 style={{display:"flex",justifyContent:"center",width:"100%",marginTop:"20px"}}>{movie.name}</h1>
        <p style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>{movie.description}</p>
        <iframe width="760" height="515"  src={movie.Video}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
       


    ))}
    
 </div>
  )
}

export default Video