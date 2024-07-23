import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videoStore",
  initialState: {
    videos: [],
    // nextToken: "",
  },
  reducers: {
    addVideos: (state, action) => {
        state.videos = action.payload;
    },
    // nextToken:(state,action)=>{
    //     state.nextToken = action.payload;
    // }
  },
});
export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer;
