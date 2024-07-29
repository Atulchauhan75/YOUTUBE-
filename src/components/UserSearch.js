import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { USER_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSearchedVideos } from "../utils/userSearchSlice";
import UserSearchResults from "./UserSearchResults";

const UserSearch = () => {
  const { searchQuery } = useParams(); // Extract searchQuery from URL params
  const videosList = useSelector((store) => store.userSearch.searchedVideos[searchQuery] || []);
  const dispatch = useDispatch();

  const getSearchResults = useCallback(async () => {
    if (!searchQuery) return; // Make sure that searchQuery is not empty before making the API call

    try {
      const url = `${USER_SEARCH_API}${searchQuery}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      dispatch(addSearchedVideos({ searchQuery, videos: json?.items }));
    } catch (error) {
      console.error("Error fetching search results: ", error);
    }
  }, [searchQuery, dispatch]);

  useEffect(() => {
    if (searchQuery && !videosList.length) {
      getSearchResults();
    }
  }, [getSearchResults, searchQuery, videosList.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log("I am at the bottom");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative left-[250px] top-14 overflow-x-hidden w-[1200px] h-auto m-8 p-8">
      {videosList && videosList.length > 0 ? (
        videosList.map((video, index) => (
          <div className="flex flex-col m-3 p-2 shadow-md" key={index}>
            <UserSearchResults info={video} />
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default UserSearch;
