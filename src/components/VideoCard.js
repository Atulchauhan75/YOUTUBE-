import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleVideoCardClick = () => {
    // console.log(video);
    navigate("/watch?v=" + info?.id);
    dispatch(toggleMenu());
  };
  return (
    <div className="p-2 m-2 w-72 h-80 shadow-lg cursor-pointer"
    onClick={() => handleVideoCardClick()}>
      <img
        className="rounded-lg "
        src={thumbnails?.medium?.url}
        alt="Thumbnail-Not-Found"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
