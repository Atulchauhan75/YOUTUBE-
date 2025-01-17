import React from 'react'
import { useNavigate } from 'react-router-dom';

const Recommended = ({info}) => {

  console.log(info);
    const navigate = useNavigate();


  if (!info || !info.snippet) {
    return null;
  }

  const { thumbnails, channelTitle, title } = info.snippet;

  const handleClick = (info) => {
    console.log(info);
    navigate(`/watch?v=${info?.id}`);
  };

  return (
    <div
      className="flex items-start p-1 hover:bg-slate-100 cursor-pointer"
      onClick={() => handleClick(info)}
    >
      {thumbnails && (
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="w-[120px] h-[80px] object-cover rounded-lg mr-4 transition-all duration-300 hover:rounded-none"
        />
      )}
      <div className="flex flex-col">
        <h1 className="text-sm font-bold">{title}</h1>
        <p className="text-gray-900">{channelTitle}</p>
        {/* <p className="text-sm text-gray-600">{description}</p> */}
      </div>
    </div>
  )
}

export default Recommended
