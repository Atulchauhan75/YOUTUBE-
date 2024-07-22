import { createSlice } from "@reduxjs/toolkit";

const searchSlice= createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cacheResults: (state,action)=>{
            // state = {...action.payload , ...state}; //NOT A CORECT WA
            // state=Object.assign(state, action.payload);//WE ALSO CANNOT DO THIS
            Object.assign(state, action.payload);
        },
    },
});
export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;