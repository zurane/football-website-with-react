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

          <a href="/">
            <div className="social-link">
              <span>Twitter</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </a>

          <a href="/">
            <div className="social-link">
              <span>Instagram</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </a>

          <a href="/">
            <div className="social-link">
              <span>Tik Tok</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </a>

          <a href="/">
            <div className="social-link">
              <span>LinkedIn</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default SocialasCard;
