import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos, setBottom, setNextToken } from "../utils/videosSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videoStore.videos);
  const nextToken = useSelector((store) => store.videoStore.nextToken);
  const bottomReached = useSelector((store) => store.videoStore.setBottom);

  const getVideos = async () => {
    try {
      // console.log("Fetching initial videos");

      // Check if videos are already present
      if (videos.length === 0) {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        // console.log("Initial videos fetched:", json.items.length);

        dispatch(setNextToken(json?.nextPageToken));

        dispatch(addVideos(json?.items));
      } 
      // else {
      //   console.log("Videos already loaded, skipping initial fetch.");
      // }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getVideos();
  }, []);
  const nextVideos = async () => {
    if (nextToken) {
      const url = `${YOUTUBE_VIDEOS_API}&pageToken=${nextToken}`;

      const data = await fetch(url);
      const json = await data.json();
      // console.log(json);
      dispatch(setNextToken(json?.nextPageToken));
      dispatch(addVideos(json?.items));
      dispatch(setBottom(false));
    }
  };

  useEffect(() => {
    if (bottomReached) {
      // console.log("inside the bottom useEffect ......");
      nextVideos();
    }
  }, [bottomReached]);

  // Handle the case where videos is not an array
  return (
    <div className="main-container flex flex-wrap justify-items-start p-2 relative top-40 left-2 z-0 overflow-auto">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video?.id} key={video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
