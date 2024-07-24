import React from "react";

const Button = ({ name, id }) => {
  
  const defaultButton = (id  == 0);
  return (
    <div>
      <button
        className={`px-3 m-2 h-8 w-auto rounded-md ${
          defaultButton
            ? "bg-black text-white"
            : "bg-gray-300 text-black hover:bg-black hover:text-white"
        }`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
