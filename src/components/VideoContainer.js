import React, { useCallback, useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos, setBottom, setNextToken } from "../utils/videosSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videoStore.videos);
  const nextToken = useSelector((store) => store.videoStore.nextToken);
  const bottomReached = useSelector((store) => store.videoStore.setBottom);

  const getVideos = useCallback(async () => {
    try {
      if (videos.length === 0) {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json);
        dispatch(setNextToken(json?.nextPageToken));
        dispatch(addVideos(json?.items));
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, videos.length]);

  useEffect(() => {
    getVideos();
  }, [getVideos]);

  const nextVideos = useCallback(async () => {
    if (nextToken) {
      const url = `${YOUTUBE_VIDEOS_API}&pageToken=${nextToken}`;
      const data = await fetch(url);
      const json = await data.json();
      dispatch(setNextToken(json?.nextPageToken));
      dispatch(addVideos(json?.items));
      dispatch(setBottom(false));
    }
  }, [dispatch, nextToken]);

  useEffect(() => {
    if (bottomReached) {
      nextVideos();
    }
  }, [bottomReached, nextVideos]);


  // Ensure videos is an array before mapping
  return (
    <div className="main-container flex flex-wrap justify-items-start p-2 relative top-40 left-2 z-0 overflow-auto">
      {Array.isArray(videos) && videos.map((video) => (
        <VideoCard
          key={video?.id}
          info={video}
        />
      ))}
    </div>
  );
};

export default VideoContainer;
