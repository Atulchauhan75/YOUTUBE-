import React from "react";
import Button from "./Button";

// const list = ["All" , "Music" , "Live" , "Cricket" , "Cooking" , "Gaming" , "News" , "Valentine" , "Football" , "Furniture" , "Doraemon" , "Tech" , "Web-Development" , "Data-Structures" , "Web-Series" , "Laptop" , "Universities" , "Schools" , "Countries" , "Global" , "Stocks"]
const list = [
  "All",
  "Music",
  "Live",
  "Cricket",
  "Cooking",
  "Gaming",
  "News",
  "Valentine",
  "Football",
  "Furniture",
  "Doraemon",
  "Tech",
  "Schools",
  "Global",
];
const ButtonList = () => {
  return (
      <div className="flex  pt-4 pb-3 pl-4  fixed top-[88px] left-[200px] bg-white  z-10 w-full ">
        {list.map((listitem, index) => (
          <Button key={index} name={listitem} />
        ))}
    </div>
  );
};

export default ButtonList;
