import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-xl font-semibold text-gray-600 animate-pulse">
        Loading posts...
      </div>
    </div>
  );
};

export default Loading;
