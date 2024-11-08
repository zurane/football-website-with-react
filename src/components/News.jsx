import React from "react";
import CardSlider from "./CardSlider";
import newsData from "../data/data"; // Ensure this import is correct
import { ChevronRightIcon } from "@heroicons/react/16/solid";

const News = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 border-b border-grey-100">
      <div className="flex flex-row justify-between items-center px-2">
        <h1 className="text-xl text-purple-950 font-bold">Latest in News</h1>
        <a
          href="#view-all"
          className="text-purple-700 font-semibold text-sm hover:underline cursor-pointer flex flex-row items-center gap-0"
        >
           <span>More News</span><ChevronRightIcon className="h-5"/>
        </a>
      </div>
      <CardSlider posts={newsData.posts} /> {/* Pass posts as a prop */}
    </div>
  );
};

export default News;
