import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import Swal from "sweetalert2";
import { initialState, reducer } from "../reducer/reducer";

const DataContext= createContext();

export const DataProvider=({children})=>{
    //app bunlar
    const [state,dispatch]= useReducer(reducer,initialState);
    const{selectedMagazin,magList}=state;
  
    const getMagazin = async()=>{
      const url = "http://localhost:3007/magazin";
      const response = await fetch(url);
      const mags= await response.json();
      // setMagList(mags);
      //case-1
      dispatch({type:"getMags",payload:mags})
    }

    const getSingleMagazin = async (id) => {
      const url = `http://localhost:3007/magazin/${id}`;
      const response = await axios.get(url);
      const flo = await response.data;
      // console.log(gods);
      dispatch({ type: "getSingleMagazin", payload: flo });
    };
  
    const getCategories = async()=>{
        const url="http://localhost:3007/Categories";
        const response =await axios.get(url);
        const categories = await response.data;
        // setCategories(categories);
        //case-2
        dispatch({type:"getCategories",     payload:categories})
      }
  
      useEffect(()=>{
        getMagazin();
        getCategories();
      },[]);
  
    const AddNewMagazin= async(newMagazin)=>{
      let url="http://localhost:3007/magazin";
      if(!selectedMagazin){
        //frontend ekleme
        newMagazin.id=(Number(magList[magList.length-1].id)+1).toString(),
      // setMagList([...magList,newMagazin])
      //case-14
      dispatch({type:"AddMag", newMagazin})
      //backend ekleme
      
      const response = await axios.post(url, newMagazin);
      console.log("yeni eklenen magazin:", response.data);
      Swal.fire({
        title: "İşlem Gerçekleştirildi",
        text: "Yeni Magazin Haberi Eklendi",
        icon: "success"
      });
      
      }
      else{//düzenleme
        //Frontend Düznleme 
        newMagazin.id=selectedMagazin.id;
        // setMagList(prev=>prev.map(mag=>{
        //   if(mag.id=== selectedMagazin.id){
        //     //düzenlenen tanrı
        //     return {...newMagazin}
        //   }
        //   else{
        //     return {...mag}
        //   }
        // }))
        //case-16
        dispatch({type:"EditMag", newMagazin})
        //Backend düzenleme 
        url+=`/${selectedMagazin.id}`
        const response2= await axios.put(url,newMagazin);
        console.log("düzenlenmiş magazin", response2.data);
        // setSelectedMagazin("");
        Swal.fire({
          title: "İşlem Gerçekleştirildi",
          text: "Magazin Haberi Güncellendi",
          icon: "info"
        });
      }
    }
  
    const DeleteMagazin= async (id)=>{
      // const confirmation = confirm("Bu Yapıyı Silmek İstediğinize Emin Misiniz?");
      const result= await Swal.fire({
        title: "Bu Yapıyı Silmek İstediğinize Emin Misiniz?",
        showCancelButton: true,
        denyButtonText: `SİL`
      })
      console.log(result);
      if(result.isConfirmed){
        // setMagList(prev=>prev.filter(stateGelen=>stateGelen.id !==id));
        //case-15
        dispatch({type:"DeleteMag", id})
      //backend silme
       const url = `http://localhost:3007/magazin/${id}`;
      // const response = await axios.delete(url);//!tehlikeli
      const response = await axios.patch(url, {isDeleted:true});
      console.log("silinen magazn:", response.data);
      Swal.fire({
        title: "İşlem Gerçekleştirildi",
        text: "Magazin Haberi Silindi",
        icon: "error"
      });
      }

    }

    //form bunlar
    const [olayAdi, setolayAdi] = useState("");
  const[olayTuru, setolayTuru] = useState("Olay Türünü Seçiniz");
  const[olayIcerigi, setolayIcerigi] = useState("");
  const[olaydakiKisiler, setolaydakiKisiler] = useState("");
  const[olayResmi, setolayResmi] = useState("");


  const handleSubmit= (e)=>{
    e.preventDefault();
    AddNewMagazin({
        olayAdi:state.olayAdi,
        olayTuru:state.olayTuru,
        olayIcerigi: state.olayIcerigi,
        olaydakiKisiler:state.olaydakiKisiler,
        olayResmi: state.olayResmi
    });
    //form reset
    // setolayAdi("");
    // setolayTuru("");
    // setolayIcerigi("");
    // setolaydakiKisiler("");
    // setolayResmi("");
    //case-3
    dispatch({type:"formReset"});
  }
  // useEffect(()=>{
  //   if(selectedMagazin){
  //     setolayAdi(selectedMagazin.olayAdi);
  //     setolayTuru(selectedMagazin.olayTuru);
  //     setolayIcerigi(selectedMagazin.olayIcerigi);
  //     setolaydakiKisiler(selectedMagazin.olaydakiKisiler);
  //     setolayResmi(selectedMagazin.olayResmi);
  //   }
  // },[selectedMagazin]);

  return <DataContext.Provider value={{
    DeleteMagazin,//CARD
    AddNewMagazin,state,handleSubmit,dispatch,getSingleMagazin//FORM
}}>
            {children}
       </DataContext.Provider>

};

export default DataContext;