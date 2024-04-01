import React from "react";

function IndeterminateIcon() {
  return (
    <svg
      stroke="currentColor"
      stroke-width="3"
      viewBox="0 0 24 24"
      className="z-10 opacity-0 group-data-[selected=true]:opacity-100 w-4 h-3 transition-opacity motion-reduce:transition-none"
    >
      <line x1="21" x2="3" y1="12" y2="12"></line>
    </svg>
  );
}

export default IndeterminateIcon;
