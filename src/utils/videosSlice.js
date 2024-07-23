import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videoStore",
  initialState: {
    videos: [],
    nextToken: "",
    setBottom: false,
  },
  reducers: {
    addVideos: (state, action) => {
      // console.log(state.videos);
      // state.videos = action.payload;
       state.videos.push(...action.payload);
      // state.videos = [...state.videos, ...action.payload];
    },
    setNextToken: (state, action) => {
      state.nextToken = action.payload;
    },
    setBottom: (state, action) => {
      state.setBottom = action.payload;
    },
  },
});
export const { addVideos, setNextToken, setBottom } = videoSlice.actions;
export default videoSlice.reducer;
