import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button
        className="px-3 m-2 h-8 w-auto
      bg-gray-300 rounded-md text-black  
      hover:bg-black  hover:text-white"
      >
        {name}{" "}
      </button>
    </div>
  );
};

export default Button;
