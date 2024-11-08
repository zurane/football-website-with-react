import React from "react";
import CardSlider from "./CardSlider";
import posts from "../data/news"; // Ensure this import is correct

const News = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 border-b border-grey-100">
      <div className="flex flex-row justify-between items-center px-2">
        <h1 className="text-xl text-purple-950 font-bold">Latest in News</h1>
        <a
          href="#view-all"
          className="text-purple-700 font-semibold text-sm hover:underline cursor-pointer"
        >
          More News
        </a>
      </div>
      <CardSlider posts={posts} /> {/* Pass posts as a prop */}
    </div>
  );
};

export default News;
