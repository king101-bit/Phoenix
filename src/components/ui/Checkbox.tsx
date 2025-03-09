"use client";
import { useState } from "react";

const Checkbox = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      {/* Hidden Default Checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="hidden"
      />

      {/* Custom Checkbox */}
      <div
        className={`w-5 h-5 flex items-center justify-center border-2 rounded-md transition-all ${
          checked ? "bg-black border-black" : "bg-white border-gray-400"
        }`}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>

      {/* Label */}
      <span className="text-black">{label}</span>
    </label>
  );
};

export default Checkbox;
