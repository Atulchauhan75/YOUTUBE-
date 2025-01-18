import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    closeMenu : false,
    openMenu : true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state, action) => {
      state.closeMenu = true;
    },
    openMenu: (state, action) => {
      state.openMenu =action.payload;
    },
  },
});
export const { toggleMenu ,closeMenu ,openMenu} = appSlice.actions;
export default appSlice.reducer;
