import React from 'react'
import { Link } from 'react-router-dom';

export default function CardDestinations({id,name, country,image}) {
  return (

    <div className='w-[22rem] h-80 bg-slate-400 m-2 flex justify-center rounded-lg overflow-hidden'>
      <Link key={id} to={`/detail/${id}`} className='no-underline'>
        <div className=''>
            <img src={image} alt={name} className='w-3/4'/>
            <h3 className='w-40 text-xl text-center'>{name}</h3>
          <div className=''> 
            <h2 className='text-xl'>{country}</h2> 
          </div>
        </div>
      </Link>
    </div>

)
}

