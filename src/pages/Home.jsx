import React from "react";
import Header from "../components/Header";
import posts from "../data/news";

export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="text-xl text-purple-950 font-bold mb-5">
          Latest in News
        </h1>
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
                <span className="text-purple-700 font-medium text-sm">
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
    </>
  );
}
