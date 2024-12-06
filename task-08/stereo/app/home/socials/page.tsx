import React from "react";
import "./socials.css";

const SocialsPage = () => {
  const featuredArtists = [
    { name: "Kendrick Lamar", listeners: "8,000,293", image: "/images/kendrick.jpg" },
    { name: "Travis Scott", listeners: "7,003,481", image: "/images/travis.jpg" },
    { name: "Sabrina Carpenter", listeners: "2,541,287", image: "/images/sabrina.jpg" },
    { name: "Arijit Singh", listeners: "2,401,654", image: "/images/arijit.jpg" },
  ];

  const inviteFriends = [
    { name: "Jayson P Anderson", likes: 144, shares: 62, plays: 111 },
    { name: "Silvia M Georgina", likes: 917, shares: 453, plays: 217 },
    { name: "Katie Pearson", likes: 2177, shares: 435, plays: 875 },
  ];

  return (
    <div className="socials-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-img">
          <img src="/images/headphones.png" alt="headphones"/>
        </div>
        <h1 className="logo">Stereo</h1>
        <div className="nav-links">
          <a href="/home/songs">Songs</a>
          <a href="/home/playlists">Lists</a>
          <a href="/home/socials">Members</a>
        </div>
        <button className="add-button">ADD</button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="page-title">
          Music enthusiasts, creators, and friends — connect with popular artists.
        </h1>

        {/* Featured Artists */}
        <section className="featured-artists">
          <h2 className="section-title">Featured Artists</h2>
          <div className="artist-grid">
            {featuredArtists.map((artist, index) => (
              <div key={index} className="artist-card">
                <img src={`/images/${artist.name.toLowerCase().replace(/\s+/g, '-')}.png`} />
                <div className="artist-info">
                  <p className="artist-name">{artist.name}</p>
                  <p className="artist-listeners">Listeners: {artist.listeners}</p>
                  <button className="artist-add-button">Add Artist ＋</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Invite Friends */}
        <section className="invite-friends">
          <h2 className="section-title">Invite Friends</h2>
          <div className="friends-list">
            {inviteFriends.map((friend, index) => (
              <div key={index} className="friend-card">
                <div className="friend-info">
                  <p className="friend-name">{friend.name}</p>
                  <p className="friend-stats">
                    Likes: {friend.likes} • Shares: {friend.shares} • Plays: {friend.plays}
                  </p>
                </div>
                <button className="friend-add-button">+</button>
              </div>
            ))}
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

export default SocialsPage;
