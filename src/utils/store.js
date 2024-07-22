import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import scrollSlice from "./scrollSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    infiniteScroll: scrollSlice,
    search : searchSlice,
    chat : chatSlice,
  },
});
export default store;
