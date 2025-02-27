
export const initialState={
    magList:[],
    categories:[],
    selectedCategory:"Tümü",
    search:"",
    selectedMagazin:"",
    olayAdi:"",
    olayTuru:"Olay Türünü Seçiniz",
    olayIcerigi: "",
    olaydakiKisiler:"",
    olayResmi: "",
    detail: ""

}

export const reducer = (state,action)=>{
    switch(action.type){
        //case-1
        case "getMags": return{
            ...state,
            magList:action.payload
        }
        //case-1
        case "getSingleMagazin": return{
            ...state,
            detail:action.payload
        }
        //case-2
        case "getCategories": return{
            ...state,
            categories:action.payload
        }
        //case-3
        case "formReset": return{
            ...state,
            olayAdi:"",
            olayTuru:"Olay Türünü Seçiniz",
            olayIcerigi: "",
            olaydakiKisiler:"",
            olayResmi: ""
        }
        //case-4(formdan gelenler)
        case"olayAdi": return{
            ...state,
            olayAdi: action.payload
        }
        //case-5(formdan gelenler)
        case"olayTuru": return{
            ...state,
            olayTuru: action.payload
        }
        //case-6(formdan gelenler)
        case"olayIcerigi": return{
            ...state,
            olayIcerigi: action.payload
        }
        //case-7(formdan gelenler)
        case"olaydakiKisiler": return{
            ...state,
            olaydakiKisiler: action.payload
        }
        //case-8(formdan gelenler)
        case"olayResmi": return{
            ...state,
            olayResmi: action.payload
        }
        //case-11(carddan gelenler)
        case"SelectedMag": 
        //projede herhangi bir card üzerinde edit butununa basıldığında seçilen tanrı state i doldururken aynı zaanda da seçilen bilgileri form aktarılan için form statleri de doldurulabilir böylelikle fazladan bir case yazılmadan ve contexte useeffect e ihtiyaç duyulmadan işlem gerçekleştirebilir
        const selected = action.payload
        return{
            ...state,
            selectedMagazin:selected,
            olayAdi:selected.olayAdi,
            olayTuru:selected.olayTuru,
            olayIcerigi:selected.olayIcerigi,
            olaydakiKisiler:selected.olaydakiKisiler,
            olayResmi:selected.olayResmi
        }
        //case-12(search gelenler)
        case"selectedCategory": return{
            ...state,
            selectedCategory: action.payload
        }
        //case-13(search gelenler)
        case"search": return{
            ...state,
            search: action.payload
        }
        //case-14(DATACONTEXT gelenler)
        case"AddMag": 
        const newMagList=[...state.magList,action.newMagazin]
        return{
            ...state,
            magList: newMagList
        }
        //case-15(DATACONTEXT gelenler)
        case"DeleteMag": 
        const updateMagList= state.magList.filter(item=>item.id !== action.id)
        return{
            ...state,
            magList: updateMagList
        }
        //case-16(DATACONTEXT gelenler)
        case"EditMag": 
        const edittedMagList= state.magList.map(item=>{
            if(item.id==state.selectedMagazin.id){
                return{...action.newMagazin}
            }else{
                return{...item}
            }
        })
        return{
            ...state,
            selectedMagazin:"",
            magList: edittedMagList
        }
    }
}