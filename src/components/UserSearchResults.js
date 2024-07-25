import React from "react";
import { useNavigate } from "react-router-dom";

const UserSearchResults = ({ info, id }) => {
  const navigate = useNavigate(); // Hook to handle navigation

  if (!info || !info.snippet) {
    return null;
  }

  const { thumbnails, channelTitle, title, description } = info.snippet;

  const handleClick = () => {
    navigate('/watch'); // Navigate to the WatchPage component
  };

  return (
    <div className="flex items-start p-4 hover:bg-slate-100 cursor-pointer" onClick={handleClick}>
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
