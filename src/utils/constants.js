const GOOGLE_API_KEY = "AIzaSyA4jdolHhZWK6rvp1MH1-sFLmrVEl5iNX4";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const USER_SEARCH_API = "https://www.googleapis.com/youtube/v3/search?key="+GOOGLE_API_KEY + "&type=video&part=snippet&maxResults=50&q="