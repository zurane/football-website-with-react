import React from 'react';
import './App.css';
import SocialLinksCard from './components/SocialLinksCard';

function App() {
  return (
    <>
      <div className="App">
        {/* Header */}
        <header className="App-header">
          <nav className='navigation-bar'>
            <ul className='navigation-links'>
              <div>
                <span className='logo'>
                  Worlds Most Followed
                </span>
              </div>
              <div className='burger-menu' aria-label='menu button'>
                <a href='/'><svg width="40" height="40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" viewBox="0 0 24 24">
                  <path d="M6 17h12M6 7h12H6Zm0 5h12H6Z"></path>
                </svg></a>
              </div>
            </ul>
          </nav>
          <SocialLinksCard />
        </header>
        {/* End of header */}
      </div>
    </>
  );
}

export default App;
