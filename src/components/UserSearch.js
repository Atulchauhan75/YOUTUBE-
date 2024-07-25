import React, { useEffect, useCallback } from "react";
import { USER_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSearchedVideos } from "../utils/userSearchSlice";
import UserSearchResults from "./UserSearchResults";

const UserSearch = () => {
  const query = useSelector((store) => store.userSearch.searchValue);
  const videosList = useSelector((store) => store.userSearch.searchedVideos);
  const dispatch = useDispatch();
  
  const getSearchResults = useCallback(async () => {
    try {
      const url = `${USER_SEARCH_API}${query}`;
      const data = await fetch(url);
      const json = await data.json();
      dispatch(addSearchedVideos(json?.items));
    } catch (error) {
      console.error("Error fetching search results: ", error);
    }
  }, [query, dispatch]);

  useEffect(() => {
    if (query) {
      getSearchResults();
    }
  }, [getSearchResults, query]);

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
            <UserSearchResults info={video} id={index} />
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default UserSearch;
