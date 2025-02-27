import React from 'react'
import Logo from '../assets/img/logodedikodu.png'
import '../assets/styles/navi.scss'
import { Outlet } from 'react-router-dom'


const Navi = () => {
  return (
    <>
      <nav>
      <div className="brand">
        <img src={Logo} alt="brand" />
        <h3>Kavga, Polemik, Basitlik, Skandal...</h3>
      </div>
      <div className="usercard">
        <img src="https://w7.pngwing.com/pngs/10/206/png-transparent-pop-art-word-comics-text-comic-book-thumbnail.png" alt="profil" />
        <span>Minel</span>
        <button>ÇIKIŞ</button>
      </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navi