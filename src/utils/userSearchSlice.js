import { createSlice } from "@reduxjs/toolkit";

const userSearchSlice = createSlice({
  name: "userSearch",
  initialState: {
    searchValue: "",
    prevSearchValue: "",
    searchedVideos:[],
    nextToken: "",
    setBottom: false,
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.prevSearchValue = state.searchValue;
      state.searchValue = action.payload;
    },
    addSearchedVideos:(state,action)=>{
      if(state.prevSearchValue!==state.searchValue){
        state.searchedVideos=[];
        state.searchedVideos.push(...action.payload);
      }
    },
    setNextToken: (state, action) => {
      state.nextToken = action.payload;
    },
    setBottom: (state, action) => {
      state.setBottom = action.payload;
    },
  },
});
export const {setSearchValue , addSearchedVideos ,setNextToken , setBottom} = userSearchSlice.actions;
export default userSearchSlice.reducer;
