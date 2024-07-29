import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
// import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]); // Add dispatch to dependencies to comply with eslint rules

  // Get video ID from URL parameters, default to an empty string if not present
  const videoId = searchParams.get("v") || "";

  return (
    <div className="flex flex-col w-full ">
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
        {/* <div className="ml-5 scroll-m-1 w-[400px]">
          <LiveChat />
        </div> */}
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
