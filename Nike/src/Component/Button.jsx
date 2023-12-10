// import React from "react";

function Button({
  children,
  backgroundColor,
  textColor,
  borderColor,
  fullwidth,
}) {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full  ${backgroundColor} ? ${backgroundColor} ${textColor} ${borderColor} : ' bg-coral-red border-coral-red text-white' ${
        fullwidth && "w-full"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
