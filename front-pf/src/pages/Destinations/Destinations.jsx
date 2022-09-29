import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
export default function Destinations() {
  return (
    <div>
      <NavBar/>
      Destinations
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
  )
}
