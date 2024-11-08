import React from "react";
import { NewspaperIcon } from "@heroicons/react/24/outline";

export default function OtherNews() {
  const otherNews = [
    {
      heading:
        "Luis Diaz hits hat-trick as Liverpool beat Bayer Leverkusen 4-0 in Champions League",
    },
    {
      heading:
        "No Room For Racism Icons show importance of diversity on and off the pitch",
    },
    {
      heading:
        "Ameobi helps Newcastle Academy players learn how to tackle discrimination",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto border-b pb-4">
      <div className="flex flex-row justify-between items-center mt-3">
        <div className="grid grid-cols-3 gap-4">
          {otherNews.map((news, index) => (
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
