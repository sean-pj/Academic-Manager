import React from "react";

export default function ExperienceBar({ percentage = "75" }) {
  return (
    <div className="relative w-full max-w-md bg-gray-800 rounded-full p-1">
      {/* Progress Bar */}
      <div
        className="h-8 rounded-full bg-green-400 transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>

      <p className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
        {percentage}% XP
      </p>

      <img
        src="\src\assets\star.png"
        className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/3 w-[50px]"
      ></img>
    </div>
  );
}
