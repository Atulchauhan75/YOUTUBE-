import { createSlice } from "@reduxjs/toolkit";

const userSearchSlice = createSlice({
  name: "userSearch",
  initialState: {
    searchValue: "",
    prevSearchValue: "",
    searchedVideos: {}, // Changed from array to object
    nextToken: "",
    setBottom: false,
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.prevSearchValue = state.searchValue;
      state.searchValue = action.payload;
    },
    addSearchedVideos: (state, action) => {
      const { searchQuery, videos } = action.payload;
      if (!state.searchedVideos[searchQuery]) {
        state.searchedVideos[searchQuery] = [];
      }
      if (state.prevSearchValue !== state.searchValue) {
        state.searchedVideos[state.searchValue] = videos;
      } else {
        state.searchedVideos[searchQuery].push(...videos);
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

export const { setSearchValue, addSearchedVideos, setNextToken, setBottom } = userSearchSlice.actions;
export default userSearchSlice.reducer;
