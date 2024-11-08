import React from "react";
import newsData from "../data/data";
import { NewspaperIcon } from "@heroicons/react/24/outline";

export default function OtherNews() {
  return (
    <div className="max-w-7xl mx-auto border-b mt-3 pb-4">
      <span className="text-sm text-purple-500 px-2 border-l-4 border-purple-300 py-1">
        Featured Articles
      </span>
      <div className="flex flex-row justify-between items-center mt-2">
        <div className="grid grid-cols-3 gap-4">
          {newsData.otherNews.map((news, index) => (
            <div
              key={index}
              className="p-2 pb-3 flex flex-row gap-3 items-center"
            >
              <NewspaperIcon className="h-7 text-purple-700" />
              <p className="text-purple-950 font-light mt-2 text-sm hover:underline cursor-pointer">
                {news.heading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
