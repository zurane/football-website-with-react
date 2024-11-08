import React from "react";
import newsData from "../data/data";
import { NewspaperIcon } from "@heroicons/react/24/outline";

export default function OtherNews() {
  return (
    <div className="max-w-7xl mx-auto border-b pb-4">
      <div className="flex flex-row justify-between items-center mt-3">
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
