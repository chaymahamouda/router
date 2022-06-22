import React from 'react'
import Cardds from './Cardds'
import Filter from './Filter'

function CardListt({movies,text,rate, addmovie}) {
  return (

    <div>
      <Filter addmovie={addmovie}/>
    <div  className="list">
      
       {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating>=rate).map((el)=> <Cardds movie={el}/>)}
    </div>
    </div>
  )
}

export default CardListt