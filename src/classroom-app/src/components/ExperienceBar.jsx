import React from "react";

export default function ExperienceBar({ percentage = "50" }) {
  return (
    <div className="relative w-full max-w-md bg-gray-300 rounded-full p-1">
      {/* Progress Bar */}
      <div
        className="h-6 rounded-full bg-green-400 transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>

      <p className="absolute inset-0 flex items-center justify-center text-sm font-bold text-black">
        {percentage}% XP
      </p>
    </div>
  );
}
