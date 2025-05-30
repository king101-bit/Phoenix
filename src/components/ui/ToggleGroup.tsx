'use client';
import { useState } from 'react';

const options = ['Buy', 'Sell', 'Rent'];

const ToggleGroup = () => {
  const [selected, setSelected] = useState('Buy');

  return (
    <div className="inline-flex border border-gray-300 rounded-lg overflow-hidden">
      {options.map((option) => (
        <button
          key={option}
          className={`px-6 py-2 text-sm font-medium transition-all ${
            selected === option
              ? 'bg-blue-600 text-white'
              : 'bg-white text-black hover:bg-gray-100'
          }`}
          onClick={() => setSelected(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleGroup;
