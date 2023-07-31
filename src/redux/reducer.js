import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

// create a slice 
export const categorySlice= createSlice({
name:"icon",
initialState:{
   category: []
},
reducers:{
     iconMoon:state=>{
        state.icon= 'moon'
     },
    
   }
})