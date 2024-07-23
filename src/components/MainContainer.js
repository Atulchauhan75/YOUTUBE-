import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videosSlice";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const MainContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videoStore.videos);
  const nextVideos = async () => {
    const url = `${YOUTUBE_VIDEOS_API}&pageToken=CDIQAA`;
    const data = await fetch(url);
    const json = await data.json();
    // setVideos(videos.concat(json?.items));
    // setNextToken(json?.nextPageToken);
    dispatch(addVideos(json?.items));
  };
  useEffect(() => {
    const container = document.querySelector(".main-container");
    const handleScroll = () => {
      if (container) {
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
          console.log("Reached the bottom!");
          nextVideos();
        }
      }
    };
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="main-container fixed top-0 left-52 h-screen overflow-y-auto overflow-x-hidden no-scrollbar">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
