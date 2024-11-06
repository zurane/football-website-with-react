import React from "react";
import ClubLinks from "./ClubLinks";
import NavigationLinks from "./NavigationLinks";
import SecondLevelNav from "./SecondLevelNav";
import BurgerMenu from "./BurgerMenu";

export default function NavigationBar() {
  return (
    <div>
      <ClubLinks />
      <nav className="navigation-bar py-2">
        <ul className="navigation-links max-w-7xl mx-auto pt-3">
          <div className="flex flex-row justify-between items-center gap-14">
            <span className="logo text-white">Worlds Most Followed</span>
            <NavigationLinks />
          </div>
          <BurgerMenu />
        </ul>
      </nav>
      <SecondLevelNav />
    </div>
  );
}