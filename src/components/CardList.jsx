import React, { useContext } from 'react'
import Card from './Card'
import DataContext from '../context/DataContext';



const CardList = () => {
  const {state}=useContext(DataContext);
  const {magList, selectedCategory}=state
  return (
    <div className='card-list'>
      {
        magList.map(item=>
          !item.isDeleted && (
            (item.olayTuru === selectedCategory || selectedCategory=== "Tümü") &&
          <Card key={item.id} item={item}/>
        )
        )
      }
    </div>
  )
}

export default CardList