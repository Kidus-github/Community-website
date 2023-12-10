// import React from "react";

function Button({ children }) {
  return (
    <button className="flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full text-white bg-coral-red border-coral-red">
      {children}
    </button>
  );
}

export default Button;
