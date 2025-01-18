import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";

const UserSearchResults = ({ info }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    // Call toggleMenu when the component mounts or the location changes
    dispatch(toggleMenu());
  }, [location, dispatch]);

  if (!info || !info.snippet) {
    return null;
  }

  const { thumbnails, channelTitle, title, description } = info.snippet;

  const handleClick = (videoInfo) => {
    dispatch(toggleMenu());
    navigate(`/watch?v=${videoInfo?.id?.videoId}`);
  };

  return (
    <div
      className="flex items-start p-4 hover:bg-slate-100 cursor-pointer"
      onClick={() => handleClick(info)}
    >
      {thumbnails && (
        <img
          src={thumbnails.high.url}
          alt={title}
          className="w-[400px] h-[260px] object-cover rounded-lg mr-4 transition-all duration-300 hover:rounded-none"
        />
      )}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="font-semibold">{channelTitle}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default UserSearchResults;
