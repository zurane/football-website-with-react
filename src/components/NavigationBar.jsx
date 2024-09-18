import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div>
      <nav className="navigation-bar py-2">
        <ul className="navigation-links">
          <div className="flex flex-row justify-between items-center gap-14">
            <span className="logo text-white">Worlds Most Followed</span>
            <div className="flex flex-row justify-around text-center gap-12">
              <li className="text-white text-sm font-semibold uppercase">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white text-sm font-semibold uppercase">
                <Link to="/">Football & Community</Link>
              </li>
              <li className="text-white text-sm font-semibold uppercase">
                <Link to="/">About</Link>
              </li>
              <li className="text-white text-sm font-semibold uppercase">
                <Link to="/">More</Link>
              </li>
            </div>
          </div>
          <div className="burger-menu border-l" aria-label="menu button">
            <a href="/">
              <svg
                width="40"
                height="40"
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.5"
                viewBox="0 0 24 24"
              >
                <path d="M6 17h12M6 7h12H6Zm0 5h12H6Z"></path>
              </svg>
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
}
