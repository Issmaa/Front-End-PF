import React from 'react'
import FlightIcon from '@mui/icons-material/Flight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LandscapeIcon from '@mui/icons-material/Landscape';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom';
import style from './SideBar.module.css';

export default function SideBar() {
  return (
    <div className=' flex w-24 h-4/5 mr-20 flex-col items-center justify-center fixed'>
        <Link to='#' className='m-6 hover:text-blue-700  transition ease-in duration-200 text-1-color '>
            <div className='bg-white w-16 h-16 rounded-full flex items-center justify-center border-slate-700 border'><AccountCircleIcon  sx={{ fontSize: 40 }}/></div>
        </Link>
        <Link to='/destinations' className='m-6 hover:text-3-color transition ease-in duration-200 text-1-color'>
            <div className='bg-white w-16 h-16 rounded-full flex items-center justify-center border-slate-700 border'><FlightIcon  sx={{ fontSize: 40 }}/></div>
        </Link>
        <Link to='#' className='m-6 hover:text-orange-500 transition ease-in duration-200 text-1-color'>
            <div className='bg-white w-16 h-16 rounded-full flex items-center justify-center border-slate-700 border'><LandscapeIcon  sx={{ fontSize: 40 }}/></div>
        </Link>
        <Link to='#' className='m-6 hover:text-zinc-400 transition ease-in duration-200 text-1-color'>
            <div className='bg-white w-16 h-16 rounded-full flex items-center justify-center border-slate-700 border'><HelpIcon  sx={{ fontSize: 40 }}/></div>
        </Link>
    </div>
  )
}