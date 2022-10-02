import React from 'react'
import { Link } from 'react-router-dom';

export default function CardDestinations({id,name, country,image}) {
  return (

    <div className='w-[22rem] h-60 bg-zinc-200 m-2 flex justify-center rounded-lg overflow-hidden backdrop-opacity-60'>
      <Link key={id} to={`/detail/${id}`} className='no-underline text-black'>
        <div className=''>
            <h3 className='w-auto text-xl text-start mx-2 m-1 font-josefin'>{name}, {country.slice(0,3)}</h3>
            <img src={image} alt={name} className='w-96 h-60'/>
        </div>
      </Link>
    </div>

)
}

