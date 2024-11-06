import React from "react";
import { Link } from "react-router-dom";
import Asernal from "../assets/clubs/t3.png";

export default function ClubLinks() {
  return (
    <div className="bg-purple-50 p-2">
      <div className="max-w-7xl mx-auto flex flex-row gap-4 items-center">
        <h5 className="font-bold uppercase text-xs">club sites</h5>
        <ul className="flex flex-row gap-4 items-center">
          <li>
            <Link
              className="text-xs font-semibold uppercase"
              to="https://www.arsenal.com/"
            >
              <img src={Asernal} alt="Asernal Club" width={35} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
