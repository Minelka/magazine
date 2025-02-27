import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PageHeading from '../../components/PageHeading';
import PageText from '../../components/PageText';
import Button from '../../components/Button';
import DataContext from '../../context/DataContext';
import LoadingPage from '../pages/LoadingPage';


const DetailPage = () => {
    const parametre=useParams();
    const postIndex = parametre.magazinID;
    const { state , getSingleMagazin} = useContext(DataContext);
    const {detail}=state
  
    useEffect(()=>{
      getSingleMagazin(postIndex)
    })
  
  return (
    <div className='detail'>
        <PageHeading heading={detail.olayAdi}/>
        <img src={detail.olayResmi} alt="resim" style={{ width: '300px', height: 'auto' }}/>
        <PageText text={`Olay Türü: ${detail.olayTuru}`} />
        <PageText text={detail.olayIcerigi}/>
        <PageText text={`Olaydaki Kişiler: ${detail.olaydakiKisiler}`} />
        <Button buttonName={"⬅️"} nereye={"/magazin"}/>
    </div>
  )
}

export default DetailPage