import React from "react";
import {Link} from "react-router-dom";
import style from './NavBar.module.css';
import SearchBar from '../SearchBar.jsx';
// import SideBar from './SideBar';

export default function NavBar() {
  return (
    <div className={style.globalContainer}>
        {/* <SideBar/> */}
    <nav className='flex justify-between ml-24' >
    <div className=' backdrop-opacity-10 '>
      <a className='flex text-3xl font-sans font-medium items-center mx-2 hover:text-zinc-400 transition ease-in duration-200' href='/'>
      <img src='/images/logo1.png' alt='logo' className='w-8 h-8 my-6 mx-6'/>
      Travelop
      </a>
    </div>
    <div className='mx-2'>
      <ul className='flex flex-row my-7 mx-2'>
        <Link to='/'>
        <li className='mx-3.5 text-gray-600 hover:text-sky-700 transition ease-in duration-200 text-xl'>Home</li>
        </Link>
        {/* <Link to={'#'}>
        <li className='mx-3.5 text-gray-600 hover:text-sky-700 transition ease-in duration-200 cursor-pointer text-xl'>Destinations</li>
        </Link>
        <Link to={'#'}>
        <li className='mx-3.5 text-gray-600 hover:text-sky-700 transition ease-in duration-200 cursor-pointer text-xl'><a href='#'>Packages</a></li>
        </Link>
        <Link to={'#'}>
        <li className='mx-3.5 text-gray-600 hover:text-sky-700 transition ease-in duration-200 cursor-pointer text-xl'><a href='#'>Help</a></li>
        </Link> */}
        <Link to={'#'}>
        <li className='mx-3.5 text-gray-600 hover:text-sky-700 transition ease-in duration-200 cursor-pointer text-xl'><a href='#'>About Us</a></li>
        </Link>

      </ul>
    </div>

    <div className='my-4 mx-3'>
      <button className='mx-2 text-gray-600 hover:text-sky-700 text-lg p-1'>Login</button>
      <button className='mx-2 text-zinc-100 bg-blue-600 w-20 h-12 rounded-lg hover:bg-zinc-100 hover:text-blue-600 transition ease-in duration-200 text-lg p-1'>Sign up</button>
    </div>
   </nav>
   
   <SearchBar/>
   </div>
    // <div className={s.container}>
    //   <Link to="/">
    //     <h1 id={s.logo}>logo</h1>
    //   </Link>
    //   <div className={s.btns}>
    //     <Link to="/login">Login</Link>
    //     <Link to="/register">Register</Link>
    //   </div>
    // </div>
  );
}