import React from 'react'
import {Players} from './shared/ListOfPlayers';
import { Link } from 'react-router-dom'
const Player = () => {
  return (
    <div className='container grid grid-cols-2 gap-3 place-content-around flex justify-around mx-auto'>
        {Players.map((player)=>(
           <div className='column'>
           <div className='card w-full' >
           <img src={player.img} className='w-full h-full'/>
             <h3>{player.name}</h3>
             <p className='title'>{player.club}</p>
             <Link to={`detail/${player.id}`}> 
             <p><button>Detail</button></p>
             </Link>
           </div>
         </div>
        ))}
    </div>


  )
}

export default Player
