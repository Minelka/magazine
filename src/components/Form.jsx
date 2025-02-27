import React, { useContext} from 'react'
import '../assets/styles/form.scss'
import DataContext from '../context/DataContext'

const Form = () => {
  const {handleSubmit,state,dispatch}= useContext(DataContext);
  const {selectedMagazin,olayAdi,olayTuru, olayIcerigi, olaydakiKisiler,olayResmi}=state;

  return (
    <form onSubmit={handleSubmit}>
      <h3>{selectedMagazin?"Magazin Düzenle":"Magazin Ekle"}</h3>
      <input value={olayAdi} type="text" placeholder='Olay Başlığı' onChange={e=>dispatch({type:"olayAdi", payload:e.target.value})}/>
      <select value={olayTuru} onChange={e=>dispatch({type:"olayTuru", payload:e.target.value})}>
        <option>Olay Türünü Seçiniz</option>
        <option>Türkiye Tarihinde Top 10</option>
        <option>Aldatma</option>
        <option>Kavga</option>
        <option>Diğer</option>
      </select>
      <textarea value={olayIcerigi} placeholder='Açıklama' onChange={e=>dispatch({type:"olayIcerigi", payload:e.target.value})}></textarea>
      <input value={olaydakiKisiler} type="text" placeholder='Olayda Yer Alan Kişiler' onChange={e=>dispatch({type:"olaydakiKisiler", payload:e.target.value})}/>
      <input value={olayResmi} type="url" placeholder='Resmi(url)' onChange={e=>dispatch({type:"olayResmi", payload:e.target.value})}/>
      <input disabled={olayAdi=== "" || olayTuru=== "" || olayIcerigi=== "" || olaydakiKisiler=== ""}  type="submit" value={selectedMagazin?"Düzenle":"Ekle"}/>
    </form>
  )
}

export default Form