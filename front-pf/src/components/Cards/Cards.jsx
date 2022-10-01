import s from "./Cards.module.css"
import CardDestinations from '../CardDestinations/CardDestinations';
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
  )
}