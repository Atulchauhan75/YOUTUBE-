import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import videosSlice from "./videosSlice";
import userSearchSlice from "./userSearchSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    search : searchSlice,
    chat : chatSlice,
    videoStore : videosSlice,
    userSearch : userSearchSlice,
  },
});
export default store;
