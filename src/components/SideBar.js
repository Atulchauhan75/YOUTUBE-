import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //This is the Early Return
  if (!isMenuOpen) return null;
  return (
    <div className=" fixed top-20 left-0 z-10 shadow-lg w-48 p-2 m-2 h-auto block">
      <ul className="border-b-2 border-gray-300 rounded-lg">
        <Link to="/">
          <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Home</li>
        </Link>
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Shorts</li>
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Videos</li>
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Live</li>
      </ul>
      
      <h1 className="font-bold">Subscriptions</h1>
      <ul className="border-b-2 border-gray-300 rounded-lg">
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Music</li>
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Sports</li>
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Gaming</li>
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Movies on top</li>
      </ul>
      <h1 className="font-bold">Watch Later</h1>
      <ul className="border-b-2 border-gray-300 rounded-lg">
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Music</li>
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Sports</li>
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Gaming</li>
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Movies</li>
      </ul>
      <h1 className="font-bold">Watch Later</h1>
      <ul className="border-b-2 border-gray-300 rounded-lg">
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Music</li>
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Sports</li>
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Gaming</li>
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Movies</li>
      </ul>
      <h1 className="font-bold">Watch Later</h1>
      <ul className="border-b-2 border-gray-300 rounded-lg">
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Music</li>
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Sports</li>
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Gaming</li>
        <li className="hover:bg-black px-2 hover:text-white rounded-md p-1">Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
