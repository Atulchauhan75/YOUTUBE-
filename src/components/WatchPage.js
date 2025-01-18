import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Recommended from "./Recommended";
// import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = useSelector((store) => store.userSearch.searchValue);
  var videosList = useSelector(
    (store) => store.userSearch.searchedVideos[searchQuery] || []
  );
  const newVideosList = useSelector(
    (store) => store.videoStore.videos
  );
  const dispatch = useDispatch();
  console.log(videosList);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]); // Add dispatch to dependencies to comply with eslint rules

  // Get video ID from URL parameters, default to an empty string if not present
  const videoId = searchParams.get("v") || "";
  if(videosList.length===0){
    
    videosList = newVideosList;
  }

  return (
    <div className="flex flex-col w-full ">
      <div className="flex">
        <div className="ml-20 mt-24 px-5 py-5 rounded-lg">
          <div>
            <iframe
              className="rounded-lg"
              width="850"
              height="500"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="ml-5  p-2 mt-24 scroll-m-1 w-[500px]  ">
          {videosList && videosList.length > 0 ? (
            videosList.map((video, index) => (
              <div className="flex flex-col m-3 p-2 shadow-sm" key={index}>
                <Recommended info={video} />
              </div>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
          {/* <Recommended/> */}
        </div>
        {/* <div className="ml-5 scroll-m-1 w-[400px]">
          <LiveChat />
        </div> */}
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
