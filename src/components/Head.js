import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults, setSearchQuery, setSuggestions, setShowSuggestions } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";
import { setSearchValue } from "../utils/userSearchSlice";

const Head = () => {
  const searchQuery = useSelector((store) => store.search.searchQuery);
  const suggestions = useSelector((store) => store.search.suggestions);
  const showSuggestions = useSelector((store) => store.search.showSuggestions);
  const searchCache = useSelector((store) => store.search.cache);
  // const previousSaerch = useSelector((store)=> store.userSearch.previousSearchValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = useCallback(async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    dispatch(setSuggestions(json[1]));
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  }, [searchQuery, dispatch]);

  const handleSuggestionClick = (s) => {
    dispatch(setSearchQuery(s));
    dispatch(setSearchValue(s));
    navigate("/results");
    dispatch(setShowSuggestions(false));
  };
  
  const handleSearchClick = (s) => {
    // dispatch(setSearchQuery(s));
    dispatch(setSearchValue(searchQuery));
    navigate("/results");
    dispatch(setShowSuggestions(false));
  };

  useEffect(() => {
    // Debouncing
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        dispatch(setSuggestions(searchCache[searchQuery]));
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache, getSearchSuggestions, dispatch]);

  return (
    <div className="fixed top-0 left-0 bg-white m-0 w-full block z-10 ">
      <div className="grid grid-flow-col p-3">
        {/* First section of head */}
        <div className="flex col-span-1 m-2">
          <img
            onClick={toggleMenuHandler}
            src="https://static.vecteezy.com/system/resources/previews/002/292/406/large_2x/hamburger-menu-line-icon-free-vector.jpg"
            alt="Menu Logo"
            className="h-9 cursor-pointer"
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.sCtdNjphAin-gugu0MNptAHaEK&pid=Api&P=0&h=180"
            alt="Youtube Logo"
            className="h-12 mx-2"
            onClick={() => console.log("hello")}
          />
        </div>

        {/* Second section of head */}
        <div className="col-span-10">
          <div>
            <input
              className="mt-2 ml-52 w-[36rem] rounded-l-full px-5 border border-gray-500 p-2 shadow-sm rounded-md"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e?.target?.value))}
              onFocus={() => dispatch(setShowSuggestions(true))}
              // onBlur means FOCUS OUT
              // onBlur={() => dispatch(setShowSuggestions(false))}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchClick();
                }
              }}
            />
            <button
              className="border border-gray-500 px-5 p-2 bg-gray-200 rounded-r-full"
              onClick={() => handleSearchClick(searchQuery)}
            >
              🔍
            </button>
            <div className="ml-52 bg-white fixed w-[36rem] border border-gray-200 rounded-lg">
              <ul>
                {showSuggestions &&
                  suggestions.map((s, index) => (
                    <li
                      onClick={() => handleSuggestionClick(s)}
                      key={index}
                      className="py-2 px-3 shadow-sm hover:bg-gray-200 rounded-sm w-full"
                    >
                      🔍 {s}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Third section of head */}
        <div className="col-span-1">
          <img
            src="https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png"
            alt="user-logo"
            className="h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
