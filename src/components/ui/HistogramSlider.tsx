"use client";
import { useState } from "react";

const histogramData = [
  1, 3, 6, 10, 15, 22, 30, 45, 50, 55, 60, 62, 58, 52, 45, 35, 25, 15, 8, 4, 2,
];

const minPrice = 0;
const maxPrice = 2000000;

const HistogramSlider = () => {
  const [min, setMin] = useState(5);
  const [max, setMax] = useState(15);
  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), max - 1);
    setMin(value);
    setMinValue(Math.floor((value / (histogramData.length - 1)) * maxPrice));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), min + 1);
    setMax(value);
    setMaxValue(Math.floor((value / (histogramData.length - 1)) * maxPrice));
  };

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);
    value = Math.max(minPrice, Math.min(value, maxValue - 1000));
    setMinValue(value);
    setMin(Math.floor((value / maxPrice) * (histogramData.length - 1)));
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);
    value = Math.min(maxPrice, Math.max(value, minValue + 1000));
    setMaxValue(value);
    setMax(Math.floor((value / maxPrice) * (histogramData.length - 1)));
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      {/* Histogram */}
      <div className="flex items-end space-x-1 h-20">
        {histogramData.map((value, index) => (
          <div
            key={index}
            className={`w-3 h-${Math.max(2, value / 3)} transition-all rounded ${
              index >= min && index <= max ? "bg-black" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      {/* Range Sliders */}
      <div className="relative mt-2">
        <input
          type="range"
          min="0"
          max={histogramData.length - 1}
          value={min}
          onChange={handleMinChange}
          className="absolute w-full bg-transparent pointer-events-none"
          style={{ zIndex: 2 }}
        />
        <input
          type="range"
          min="0"
          max={histogramData.length - 1}
          value={max}
          onChange={handleMaxChange}
          className="absolute w-full bg-transparent pointer-events-none"
          style={{ zIndex: 1 }}
        />
      </div>

      {/* Input Fields */}
      <div className="flex justify-between mt-4">
        <div>
          <label className="block text-sm text-gray-600">Minimum</label>
          <input
            type="number"
            value={minValue}
            onChange={handleMinInputChange}
            className="w-32 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Maximum</label>
          <input
            type="number"
            value={maxValue}
            onChange={handleMaxInputChange}
            className="w-32 p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default HistogramSlider;
