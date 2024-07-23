import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videosSlice";
const VideoContainer = () => {
  const videos = useSelector((store)=>store.videoStore.videos);
  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(addVideos(json?.items));
  };

  return (
    <div className="flex flex-wrap justify-items-start p-2 relative top-40 left-2 z-0 overflow-auto ">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video?.id} key={video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}
      ;
    </div>
  );
};

export default VideoContainer;
