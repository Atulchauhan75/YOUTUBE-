import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { setBottom } from "../utils/videosSlice";

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const container = document.querySelector(".main-container");
    let previousScrollHeight = 0;

    const handleScroll = () => {
      if (container) {
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;

        // Check if the user has scrolled to the bottom
        if (scrollTop + clientHeight >= scrollHeight) {
          console.log("Reached the bottom!");
          dispatch(setBottom(true));
          previousScrollHeight = scrollHeight;
        } else if (scrollHeight !== previousScrollHeight) {
          // Trigger the event when the content height changes
          console.log("Content height changed!");
          dispatch(setBottom(false));
          previousScrollHeight = scrollHeight;
        }
      }
    };

    // Add scroll event listener
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    // Clean up the event listener on component unmount
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [dispatch]);

  return (
    <div className="main-container fixed top-0 left-52 h-screen overflow-y-auto overflow-x-hidden no-scrollbar">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;