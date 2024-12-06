import React from "react";
import "./playlists.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="navbar">
          <img
              src="/images/headphones.png"
              alt="headphones"
              className="logo-image"
            />
        <h1 className="logo">Stereo</h1>
        <nav className="menu">
          <button><a href="/home/socials" >Username</a></button>
          <button><a href="/home/songs" >Songs</a></button>
          <button><a href="/home/playlists" >Lists</a></button>
          <button><a href="/home/socials" >Socials</a></button>
          <button className="add-button">ADD</button>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <section className="hero-section">
          <h2 className="headline">Discover, Organize, and Share Music Like Never Before</h2>
          <button className="start-list-button">Start Your Own List</button>
        </section>

        <section className="popular-playlists-section">
          <h3 className="section-title">Popular Playlists</h3>
          <div className="playlist-row">
            <div className="playlist-card">
              <img src="/images/lofi.png" alt="Lofi Chill Beats" />
              <h4>Lofi Chill Beats to Study</h4>
              <p>The_Lofi_Guy</p>
            </div>
            <div className="playlist-card">
              <img src="/images/poprock.png" alt="Best Pop-Rock" />
              <h4>Best Pop-Rock Album 2010</h4>
              <p>Chill_Rock</p>
            </div>
            <div className="playlist-card">
              <img src="/images/move-groove.png" alt="Move and Groove" />
              <h4>Move and Groove</h4>
              <p>Metallica</p>
            
            </div>
          </div>
        </section>

        <section className="your-playlists-section">
          <h3 className="section-title">Your Playlists</h3>
          <div className="playlist-row">
            <div className="playlist-card">
              <img src="/images/liked.png" alt="Liked Songs" />
              <h4>Liked Songs Playlist</h4>
              <p>Username</p>
            </div>
            <div className="playlist-card">
              <img src="/images/hindi-pop.png" alt="Hindi Pop" />
              <h4>Hindi Pop Late 90's</h4>
              <p>Username</p>
            </div>
            <div className="playlist-card">
              <img src="/images/study-time.png" alt="Study Time" />
              <h4>Study Time & Focus</h4>
              <p>Username</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
          <p>Contact</p>
          <div>
            <button className="icons">
              <img src="/images/upload.png" alt="upload" />
              <img src="/images/instagram.png" alt="Instagram" />
              <img src="/images/twitter.png" alt="Twitter" />
              <img src="/images/downloads.png" alt="Download" />
            </button>
          </div>
        </footer>
    </div>
  );
};

export default App;
