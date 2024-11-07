import React from "react";
import posts from "../data/news";

export default function News() {
  return (
    <div className="max-w-7xl mx-auto my-10 border-b-2 pb-6">
      <div className="flex flex-row justify-between items-center px-2">
        <h1 className="text-xl text-purple-950 font-bold mb-5">
          Latest in News
        </h1>
        <a
          href="#view-all"
          className="text-purple-700 font-semibold text-sm hover:underline cursor-pointer"
        >
          View All
        </a>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="p-2">
            <img
              src={post.image}
              alt={post.category}
              width={100}
              className="w-full object-cover rounded"
            />
            <div className="mt-2">
              <span className="text-purple-700 font-semibold text-sm">
                <span>›</span> {post.category}
              </span>
              <h3 className="text-purple-950 font-bold mt-2 text-lg hover:underline cursor-pointer">
                {post.heading}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
