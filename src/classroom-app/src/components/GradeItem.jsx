import React from "react";

export default function GradeItem({ title, mark }) {
  return (
    <div className="p-3 border-2 border-gray-300 rounded-lg bg-white flex justify-between items-center">
      <span className="font-medium text-gray-800">{title}</span>
      <span className="text-sm text-gray-500">Grade: {mark}</span>
    </div>
  );
}
