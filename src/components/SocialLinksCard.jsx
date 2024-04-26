import React from "react";

function SocialLinksCard() {
    return (
        <>
            <div className="ranking-card">
                <div className="card-headings">
                    <span className="info-chip">
                        Monthly rankings
                    </span><br /><br />
                    <span className="title">Discover the top sports
                        <br />
                        teams & celebrities in the <br /> world to follow.</span>
                </div>
                <div>
                    <a href="/">
                        <div className="social-link">
                            <span>
                                facebook
                            </span>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </div>
                    </a>

                    <a href="/">
                        <div className="social-link">
                            <span>
                                Twitter
                            </span>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </div>
                    </a>

                    <a href="/">
                        <div className="social-link">
                            <span>
                                Instagram
                            </span>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </div>
                    </a>

                    <a href="/">
                        <div className="social-link">
                            <span>
                                Tik Tok
                            </span>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </div>
                    </a>

                    <a href="/">
                        <div className="social-link">
                            <span>
                                LinkedIn
                            </span>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </div>
                    </a>
                </div>

            </div>
        </>
    )
}
export default SocialLinksCard;
