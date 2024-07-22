import Head from "./components/Head";
import "./App.css";
// import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element: <MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
}])
function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <h1 className="bg-red-50">Hello My name is Atul Chauhan</h1> */}
        <Head />
        <RouterProvider router={appRouter}/>
        {/* <Body />  */}

        {/*
         *Header
         *Body
         *   -SideBar
         *      --MenuItems
         *   -MainContainer
         *      --ButtonsList
         *      --VideoList
         *      --VideoCard
         */}
      </div>
    </Provider>
  );
}

export default App;
