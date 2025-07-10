import {createSlice} from "@reduxjs/toolkit";
const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        isSuggestionOpen:false
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        closeSuggestion:(state)=>{
            state.isSuggestionOpen=false;
        },
        openSuggestion:(state)=>{
            state.isSuggestionOpen=true;
        },
        
        
    },
});

export const {toggleMenu,closeMenu,closeSuggestion,openSuggestion}=appSlice.actions;
export default appSlice.reducer;