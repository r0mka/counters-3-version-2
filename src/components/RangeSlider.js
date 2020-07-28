import React from 'react';

export default function RangeSlider({ range, updateRange, id }) {
  const handleChange = (event) => updateRange(id, Number(event.target.value));

  return (
    <div className="slidecontainer">
      <input
        className="slider"
        id="myRange"
        type="range"
        min="1"
        max="10"
        value={range}
        onChange={handleChange}
      />
      Range: <span id="range-value">{range}</span>
    </div>
  );
}
