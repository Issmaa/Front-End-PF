import React, { useEffect,useState } from 'react'
import s from "./Cards.module.css"
import { useDispatch, useSelector } from 'react-redux';
import {getHotels} from '../../redux/actions';
import CardDestinations from '../CardDestinations/CardDestinations';
import data from '../../data/MOCK_DATA.json';
export default function Cards({hotels}) {

  return (
    <div className='flex flex-wrap my-4 p-1 justify-center items-center'>
      {hotels && hotels?.map(e =>
        <CardDestinations key={e.id} 
        id={e.id} 
        name={e.name} 
        number={e.phoneNumber} 
        address={e.address} 
        country={e.cityCountry} 
        description={e.description} 
        image={e.image ? e.image : 'not found'}/>
      )}
    </div>
  //   <div className='flex flex-wrap my-4 justify-center items-center'>
  //   {data && data?.map(e =>
  //     <CardDestinations key={e.id} 
  //     id={e.id} 
  //     name={e.name} 
  //     country={e.country} 
  //     sex={e.services} 
  //     ip={e.ip_address}/>
  //   )}
  // </div>
  )
}