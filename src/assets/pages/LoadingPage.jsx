import React from 'react'
import {useNavigate} from 'react-router-dom'


const LoadingPage = () => {
  const navigate= useNavigate();
  setTimeout(()=>{navigate("/magazin");},2000)
  return (
    <div className='loading-page'>
      <div className='loader'></div>
      </div>
  )
}

export default LoadingPage