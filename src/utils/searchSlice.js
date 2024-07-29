import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cache: {},
  searchQuery: "",
  suggestions: [],
  showSuggestions: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    cacheResults: (state, action) => {
      Object.assign(state.cache, action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    setShowSuggestions: (state, action) => {
      state.showSuggestions = action.payload;
    },
  },
});

export const { cacheResults, setSearchQuery, setSuggestions, setShowSuggestions } = searchSlice.actions;
export default searchSlice.reducer;
