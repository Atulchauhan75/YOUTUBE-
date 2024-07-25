import { createSlice } from "@reduxjs/toolkit";

const userSearchSlice = createSlice({
  name: "userSearch",
  initialState: {
    searchValue: "",
    searchedVideos:[],
    nextToken: "",
    setBottom: false,
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    addSearchedVideos:(state,action)=>{
        state.searchedVideos.push(...action.payload);
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
