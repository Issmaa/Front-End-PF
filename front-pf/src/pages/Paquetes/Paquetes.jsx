import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar'
import { getHotels } from '../../redux/actions';
import Cards from '../../components/Cards/Cards'
import Pagination from '../../components/Pagination/Pagination';



export default function Paquetes() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotels())
  },[dispatch])

  const hotels = useSelector(state=> state.hotels);
   //PAGINADO
   const [currentPage,setCurrentPage] = useState(1);
   const [resultsPorPagina] = useState(3);
   
   const indiceUltimo = currentPage * resultsPorPagina;
   const indicePrimero = indiceUltimo - resultsPorPagina;
   let infoHotels = hotels.slice(indicePrimero, indiceUltimo);
   
   
   
   
   //Cambio de pagina
 function pagina(pageNumber){
   return setCurrentPage(pageNumber)
 }

 const nextPage = () => {
    if( hotels.length > currentPage + 1){
      return setCurrentPage(currentPage + 1);
    } else {
      return setCurrentPage(currentPage);
    }
  }
 const prevPage = () => {
  if(currentPage > 1){
     setCurrentPage(currentPage - 1);
  }
}
  

  

  return (
    <div>
      <NavBar/>
      <div className='mx-24 my-4'>
        <div className='w-auto h-127 my-4 '>
        <div className=' bg-rock-lake w-full h-full bg-no-repeat bg-cover bg-center rounded-2 text-white flex'><p className='my-auto mx-8 text-6xl w-1/4 font-josefin'>Disfruta los mejores destinos</p></div>
        </div>
      

      <Pagination 
      resultsPorPagina={resultsPorPagina} 
      totalResults={hotels.length} 
      pagina={pagina}
      nextPage={nextPage}
      prevPage={prevPage}
      />

      <div className='flex justify-end'>
        <select  className='mx-2 bg-white text-1-color rounded-lg border-2 border-1-color'>
          <option value={''}>Filtro 1</option>
          <option value={'DataBase'}>A-Z</option>
          <option value={'Api'}>Z-A</option>
        </select>
        <select  className='mx-2 bg-white text-1-color rounded-lg border-2 border-1-color'>
          <option value={''}>Filtro 2</option>
          <option value={'DataBase'}>Low price</option>
          <option value={'Api'}>High Price</option>
        </select>
      </div>
  <Cards hotels={infoHotels}/>
    </div>
    </div>
  )
}
