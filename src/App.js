import Head from "./components/Head";
import "./App.css";
// import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import {  Route, Routes } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import UserSearch from "./components/UserSearch";


function App() {
  return (
    <Provider store={store}>
      <div >
        <Head />
        <Body/>
        <Routes>
          <Route path="/"  element={<MainContainer/>} />
          <Route path="/watch"  element={<WatchPage/>} />
          <Route path="/results/:searchQuery"  element={<UserSearch/>} />
          {/* <Route path="/watch" element={<WatchingVideo/>}/> */}
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
