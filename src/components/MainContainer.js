import React  from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="fixed top-0 left-52 h-screen overflow-y-auto overflow-x-hidden no-scrollbar">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
