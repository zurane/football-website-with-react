import React from "react";
import videos from "../data/videos";
import { PlayIcon } from "@heroicons/react/16/solid";

export default function Videos() {
  return (
    <div className="max-w-7xl m-auto mt-5 text-purple-950 pb-4">
      <div className="flex flex-row justify-between items-center px-2">
        <h2 className="font-bold text-lg mb-3">Latest videos</h2>
        <a
          href="#view-all"
          className="text-purple-700 font-semibold text-sm hover:underline cursor-pointer"
        >
          More Videos
        </a>
      </div>
      <div className="grid grid-cols-5 gap-0">
        {videos.map((video, index) => (
          <div key={index} className="p-2">
            <div className="relative">
              <img
                src={video.img}
                alt="Video"
                className="w-full object-cover rounded shadow-md"
              />
              <div className="mt-2">
                <span className="text-white font-semibold text-sm ">
                  <span className="bg-purple-950 p-1 rounded-tr-lg rounded-bl-md flex flex-row items-center absolute bottom-0">
                    <PlayIcon className="h-4" />
                    {video.timestamp}
                  </span>
                </span>
              </div>
            </div>
            <span className="text-purple-950 font-black text-sm">
              {video.category}
            </span>
            <p className="text-purple-950 font-light mt-2 text-sm hover:underline cursor-pointer">
              {video.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
