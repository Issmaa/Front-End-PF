import React from 'react'
import FlightIcon from '@mui/icons-material/Flight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LandscapeIcon from '@mui/icons-material/Landscape';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom';
import style from './SideBar.module.css';

export default function SideBar() {
  return (
    <div className=' flex w-24 h-4/5 flex-col items-center justify-center fixed'>
        <Link to='#' className='m-6 hover:text-blue-700  transition ease-in duration-200 '>
            <div className='bg-white w-16 h-16 rounded-full flex items-center justify-center border-slate-700 border'><AccountCircleIcon className={style.user}/></div>
        </Link>
        <Link to='/destinations' className='m-6 hover:text-violet-700 transition ease-in duration-200'>
            <div className='bg-white w-16 h-16 rounded-full flex items-center justify-center border-slate-700 border'><FlightIcon className={style.user}/></div>
        </Link>
        <Link to='#' className='m-6 hover:text-orange-500 transition ease-in duration-200'>
            <div className='bg-white w-16 h-16 rounded-full flex items-center justify-center border-slate-700 border'><LandscapeIcon className={style.user}/></div>
        </Link>
        <Link to='#' className='m-6 hover:text-zinc-400 transition ease-in duration-200'>
            <div className='bg-white w-16 h-16 rounded-full flex items-center justify-center border-slate-700 border'><HelpIcon className={style.user}/></div>
        </Link>
    </div>
  )
}