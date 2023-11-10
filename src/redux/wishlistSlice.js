import { createSlice } from "@reduxjs/toolkit";

const wishSlice= createSlice({
    name:'wish',
    initialState:[],
    reducers:{
        addToWish:(state,action)=>{
            state.push(action.payload)
        },

                               //id
        removeWish:(state,action)=>{
            // return new filtered array
         return  state.filter(i=>i.id!=action.payload)
        }
    }
})

// export reducer
export default wishSlice.reducer

// action

export  const {addToWish,removeWish}=wishSlice.actions