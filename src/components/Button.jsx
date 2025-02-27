import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/button.scss'

const Button = ({buttonName, nereye}) => {
  return (
    <Link to={nereye}>
    <button className='buton'>{buttonName}</button>
    </Link> 
  )
}

export default Button