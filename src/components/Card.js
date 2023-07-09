import React from "react";

export const Card = ({ children }) => {
  return (
    <div className="w-full h-full rounded-md relative p-3  bg-[#191919]">
      {children}
    </div>
  );
};
