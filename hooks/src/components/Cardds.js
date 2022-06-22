import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function Cardds({movie}) {
  const [stars, setStars] = useState(movie.rating);
  var example = {
    size: 40,
    edit: false,
    value: stars,
    onChange: (newValue) => {
      setStars(newValue);
    }
  };
  return (
    <div className='imgg'>
        <Card style={{ width: '18rem', margin:'20px', height:'620px', border:" 2px solid black" }}>
  <Card.Img variant="top" src={movie.posterurl}style={{minHeight:'220px',maxHeight:'220px',border:"2px solid black" }}/>
  <Card.Body style={{ backgroundColor:'#00000021' }}>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text style={{height:'200px'}}>{movie.description} </Card.Text>
    <Link to={`/Video/${movie.name}`}><Button className='showw' variant="primary" style={{backgroundColor:'#5c5f65',borderColor:'#212529'}}>Show</Button></Link>
    <p style={{marginLeft:'40px'}}><ReactStars style = {{marginTop:'200px'}} {...example} /></p>
  </Card.Body>
</Card>
    </div>
  )
}

export default Cardds