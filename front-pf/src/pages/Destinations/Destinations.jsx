import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from "../../components/SideBar/SideBar.jsx";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


export default function Destinations() {

  return (
    <div>
      <NavBar/>
      <SideBar/>
      <div className='mx-24 my-4'>
      <div className="flex justify-start mx-4 my-2 ">
      <span className='text-xl text-start'>Destinations</span>
      </div>
      <div className='flex justify-center'>
      <nav aria-label="Page navigation example d-flex p-2">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
      </div>
<div className='flex justify-end'>
  <select>
    <option>Opcion 1</option>
      <option>Opcion 2</option>
  </select>
  </div>


    </div>
    </div>
  )
}
