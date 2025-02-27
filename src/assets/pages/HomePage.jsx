import React from 'react'
import SearchBar from '../../components/SearchBar'
import CardList from '../../components/CardList'
import Form from '../../components/Form'

const HomePage = () => {
  return (
    <div className='home-page'>
      <SearchBar/>
      <Form/>
      <CardList />
    </div>
  )
}

export default HomePage