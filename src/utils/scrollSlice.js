import { createSlice } from "@reduxjs/toolkit";


const scrollSlice =createSlice({
    name: "infiniteScroll",
    initialState: {
        isReachedBottom : false,
    },
    reducers:{
        loadMore: (state,action)=>{
            state.isReachedBottom = true;
        },
        toggleIsReachedBottom: (state,action)=>{
            state.isReachedBottom = !state.isReachedBottom;
        }
    },
});
export const {loadMore , toggleIsReachedBottom} = scrollSlice.actions;
export default scrollSlice.reducer;