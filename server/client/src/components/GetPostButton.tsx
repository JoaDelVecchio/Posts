import React from "react";

const GetPostButton = ({ handleGetPosts }: { handleGetPosts: () => void }) => {
  return (
    <button
      onClick={handleGetPosts}
      className="px-6 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-all duration-300 mb-6"
    >
      Load All Posts
    </button>
  );
};

export default GetPostButton;
