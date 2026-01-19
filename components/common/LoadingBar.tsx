import React from "react";

function LoadingBar() {
  return (
    <div className="h-1.5 w-full bg-gray-200 overflow-hidden rounded-full">
      <div className="h-full bg-primary-color animate-pulse w-full origin-left-right"></div>
    </div>
  );
}

export default LoadingBar;
