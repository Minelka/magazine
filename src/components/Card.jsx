import React, { useContext } from 'react'
import '../assets/styles/card.scss'
import { FaPencilAlt,FaRegTrashAlt } from "react-icons/fa";
import DefaultMagazin from "../assets/img/images.jpg"
import DataContext from '../context/DataContext';
import Button from './Button';
import AuthContext from '../context/AuthContext';
 
const Card = ({item}) => {
  const {DeleteMagazin, state, dispatch}=useContext(DataContext);
  const {isAuthenticated}=useContext(AuthContext);

const clickEdit=()=>{dispatch({type:"SelectedMag", payload:item})
window.scrollTo({top:0})
}
  return (

    (item.olayTuru.toLowerCase().startsWith(state.search.toLowerCase()))
    &&
    <div className="card-container">
      <div className='card'>
        <img src={item.olayResmi?item.olayResmi:DefaultMagazin} alt="profil" />
        <div className="card-text">
          <span>{item.olayAdi}</span>
          <span>Olay Türü: {item.olayTuru}</span>
          <span>Olan Kişiler: {item.olaydakiKisiler}</span>
          <span>
            Açıklaması: {item.olayIcerigi.substring(0,item.olayIcerigi.substring(0,70).lastIndexOf(" "))+"..."}
          </span>
        </div>
      </div>
      <button onClick={()=>DeleteMagazin(item.id)} className="delete"><FaRegTrashAlt className='icon'/></button>
      <button onClick={()=>clickEdit()} className="edit"><FaPencilAlt className='icon'/></button>
      <Button buttonName={"🔍"} nereye={item.id}/>
    </div>
  )
}
 
export default Card