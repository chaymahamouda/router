import React, { useState } from 'react'
const Filter = ({addmovie}) => {
  const [show, setShow] = useState(false);  
  const[newmovie,setNewmovie]=useState({name:"",description:"",posterurl:"",rating:""}) 
  return (
    <div className='acceuil'>
    <h1>Films, séries TV et bien plus en illimité.</h1>
    <div className='filter'>
       <button style={{width:'100px',height:'50px',borderRadius:'20px',marginTop:'10px',fontSize:'30px'}} onClick={()=>setShow(!show)}>+</button>
       <div className='modal-bg '>
        <div className='modal-content'>
        {show ?(
   <div className="chayma" style={{width:"40%",height:"10%", margin:"0 auto"}}>
    <button className='closee-btn' onClick={()=>setShow(!show)}>X</button>
    <input className='input1' type="text" placeholder='enter name' onChange={(e)=>setNewmovie({...newmovie,name:e.target.value})}/>
    <input className='input2' type="text" placeholder='enter description'onChange={(e)=>setNewmovie({...newmovie,description:e.target.value})}/>
    <input className='input3' type="text" placeholder='enter Url'onChange={(e)=>setNewmovie({...newmovie,posterurl:e.target.value})}/>
    <input className='input4' type="number"placeholder='click sur rate'onChange={(e)=>setNewmovie({...newmovie,rating:e.target.value})}/>
    <button className='addd-btn' onClick={()=>addmovie(newmovie)}>add movie</button>
  </div>

):null
}
</div>
       </div>
    </div>
    </div>

)}
  


export default Filter