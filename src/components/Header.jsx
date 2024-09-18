import React from "react";
import ChoiceCard from "./SocialLinksCard";
import NavigationBar from "./NavigationBar";

export default function Header() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <ChoiceCard />
      </header>
      {/* End of header */}
    </div>
  );
}
