import React from "react";

export default function NavigationButton({
  imgSrc,
  onClick,
  text,
  other = "bg-gray-300",
}) {
  return (
    // <div className="flex items-center space-x-2">
    <button
      onClick={onClick}
      className={`text-lg font-bold flex items-center gap-3 px-6 py-2 rounded-2xl ${other}`}
    >
      <img src={imgSrc} alt={text} className="w-6 h-6" />
      {text}
    </button>
    // </div>
  );
}
