import React from "react";

const SecondLevelNav = () => {
  const navLinks = [
    "Home",
    "Fixtures",
    "Results",
    "Tables",
    "Transfers",
    "Injury news",
    "Statstics",
    "News",
    "Videos",
    "Watch Live",
    "Tickets",
    "Clubs",
    "Players",
    "Award Winners",
  ];
  // const links = Array.from({ length: 14 }, (navLinks, i) => `Link ${i + 1}`);
  return (
    <nav className="second-level-nav bg-white flex flex-row justify-between items-center max-w-6xl mx-auto">
      {navLinks.map((link, index) => (
        <ul className="navigation-links text-sm py-5">
          <a
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            key={index}
            className="nav-link text-gray-600 font-bold"
          >
            {link}
          </a>
        </ul>
      ))}
    </nav>
  );
};

export default SecondLevelNav;
