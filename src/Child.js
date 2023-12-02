import React from "react";

function Child({ onChangeColor, color }) {
  function handleClick() {
    onChangeColor(color); // Passes its own color to the parent
  }

  return (
    <div
      onClick={handleClick}
      className="child"
      style={{ backgroundColor: color }}
    />
  );
}

export default Child;
