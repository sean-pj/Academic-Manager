import React from "react";

export default function StarsCounter({ stars = 1 }) {
  return (
    <div className="flex gap-2 justify-between items-center bg-yellow-100 border-4 border-yellow-400 rounded-2xl py-2 px-6">
      <p className="font-bold">{stars}</p>
      <img src="\src\assets\star.png" className="w-[30px]"></img>
    </div>
  );
}
