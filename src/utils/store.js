import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import scrollSlice from "./scrollSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import videosSlice from "./videosSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    infiniteScroll: scrollSlice,
    search : searchSlice,
    chat : chatSlice,
    videoStore : videosSlice,
  },
});
export default store;
