import React from "react";
import { Link } from "react-router-dom";

function SocialasCard() {
  return (
    <>
      <div className="ranking-card rounded">
        <div className="card-headings">
          <span className="info-chip rounded">Monthly Rankings</span>
          <br />
          <br />
          <span className="title">
            Discover the world's best
            <br /> sports teams & players
            <br /> to follow.
          </span>
        </div>
        <div>
          <Link to="players">
            <div className="social-link">
              <span>Football Players</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </Link>

          <Link to="/">
            <div className="social-link">
              <span>Football Teams</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </Link>

          <Link to="/">
            <div className="social-link">
              <span>Football News</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default SocialasCard;
