import React from "react";
import { Link } from "react-router-dom";
import badges from "../data/data";

export default function ClubBadges() {
  return (
    <div className="bg-purple-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-row gap-5 items-center">
        <h5 className="font-bold uppercase text-xs">club sites</h5>
        <ul className="flex flex-row gap-4 items-center">
          {/* The clubBagdes array is mapped to create a list of club badges */}
          {badges.clubBagdes.map((club, index) => (
            <li key={index}>
              <Link className="text-xs font-semibold uppercase" to={club.url}>
                <img
                  className="hover:transform hover:scale-125 transition duration-300"
                  src={club.image}
                  alt={club.name}
                  width={32}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
