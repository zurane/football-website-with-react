import React from "react";
import { NavLink } from "react-router-dom";
export default function NavigationLinks() {
  const activeLinkClass = "border-b-4 border-white pb-3";

  return (
    <div className="flex flex-row justify-around text-center gap-12">
      <li className="text-white text-sm font-semibold uppercase">
        <NavLink
          className={({ isActive }) => (isActive ? activeLinkClass : null)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="text-white text-sm font-semibold uppercase">
        <NavLink
          className={({ isActive }) => (isActive ? activeLinkClass : null)}
          to="about"
        >
          Football & Community
        </NavLink>
      </li>
      <li className="text-white text-sm font-semibold uppercase">
        <NavLink
          className={({ isActive }) => (isActive ? activeLinkClass : null)}
          to="when"
        >
          About
        </NavLink>
      </li>
      <li className="text-white text-sm font-semibold uppercase">
        <NavLink
          className={({ isActive }) => (isActive ? activeLinkClass : null)}
          to="this"
        >
          More
        </NavLink>
      </li>
    </div>
  );
}
