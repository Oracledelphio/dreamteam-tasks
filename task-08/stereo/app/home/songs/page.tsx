'use client';

import React, { useState } from 'react';
import './songs.css';

const SongsPage = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Popular');

  // Dummy data for popular songs
  const popularSongs = [
    { title: 'Ashes & Blood', artist: 'Riot Games', date: 'Nov 27', rating: 4.0, image: '/images/arcane.png' },
    { title: 'Heart pt.6', artist: 'Kendrick Lamar', date: 'Nov 24', rating: 4.8, image: '/images/gnx.png' },
    { title: 'Rah Tah Tah', artist: 'Tyler the Creator', date: 'Nov 21', rating: 4.7, image: '/images/chromakopia.png' },
    { title: 'Moonlit Floor', artist: 'LISA', date: 'Oct 29', rating: 4.2, image: '/images/moonlit.png' },
    { title: 'APT.', artist: 'ROSÉ ft. Bruno Mars', date: 'Nov 2', rating: 4.2, image: '/images/apt.png' },
    { title: 'Good Graces', artist: 'Sabrina Carpenter', date: 'Sept 27', rating: 4.3, image: '/images/sabrina.png' },
    { title: 'Natural', artist: 'Imagine Dragons', date: 'July 24', rating: 3.3, image: '/images/natural.png' },
    { title: 'Astronomy', artist: 'Conan Gray', date: 'Aug 17', rating: 4.3, image: '/images/astronomy.png' },
    { title: 'Golden Hour', artist: 'JVKE', date: 'Feb 28', rating: 2.7, image: '/images/golden.png' },
    { title: 'Africa', artist: 'Toto', date: 'Jan 2', rating: 3.8, image: '/images/africa.png' },
    { title: 'Midnight Vibes', artist: 'Billie Elish', date: 'Dec 6', rating: 1.5, image: '/images/midnight.png' },
    { title: 'November Rain', artist: 'Guns N Roses', date: 'March 18', rating: 4.5, image: '/images/jungle.png' },
  ];

  // Dummy data for popular artists
  const popularArtists = [
    { name: 'The Weeknd', listeners: '113,227,451' },
    { name: 'Kendrick Lamar', listeners: '67,572,923' },
    { name: 'Taylor Swift', listeners: '89,089,016' },
    { name: 'Travis Scott', listeners: '70,128,441' },
    {name: 'Metro Boomin', listeners: '82,112,394'},
  ];

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="/images/headphones.png" alt="headphones" className="logo-image" />
          <span className="logo-text">Stereo</span>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Username</a>
          <a href="/home/songs" className="nav-link">Songs</a>
          <a href="/home/playlists" className="nav-link">Lists</a>
          <a href="/home/socials" className="nav-link">Members</a>
        </nav>
        <button className="add-button">ADD +</button>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="filter-section">
          {/* Filters */}
          <div className="filters">
            <button className={filter === 'Year' ? 'active' : ''} onClick={() => setFilter('Year')}>Year</button>
            <button className={filter === 'Rating' ? 'active' : ''} onClick={() => setFilter('Rating')}>Rating</button>
            <button className={filter === 'Genre' ? 'active' : ''} onClick={() => setFilter('Genre')}>Genre</button>
            <button className={filter === 'Popular' ? 'active' : ''} onClick={() => setFilter('Popular')}>Popular</button>
            <button className={filter === 'Other' ? 'active' : ''} onClick={() => setFilter('Other')}>Other</button>
          </div>

          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Find a Song"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Popular Content: Songs and Artists */}
        <div className="popular-content">
          {/* Popular Songs */}
          <section className="popular-songs">
            <h2>Popular Songs This Week</h2>
            <div className="songs-list">
              {popularSongs.map((song, index) => (
                <div className="song-card" key={index}>
                  <img src={song.image} alt={song.title} className="song-image" />
                  <p className="song-title">{song.title}</p>
                  <p className="song-artist">{song.artist}</p>
                  <p className="song-date">{song.date}</p>
                  <div className="song-rating">
                    {'★'.repeat(Math.round(song.rating))}{' '}
                    {'☆'.repeat(5 - Math.round(song.rating))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Artists */}
          <aside className="popular-artists">
  <h3>Popular Artists</h3>
  <ul>
    {popularArtists.map((artist, index) => (
      <li key={index}>
        <img
          src={`/images/${artist.name.toLowerCase().replace(/\s+/g, '-')}.png`} // Dynamically generate file paths
          alt={artist.name}
          className="artist-image"
        />
        <div className="artist-name">{artist.name}</div>
        <div className="listener-count">{artist.listeners} listeners</div>
      </li>
    ))}
  </ul>
</aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Contact</p>
        <div className="social-icons">
          <img src="/images/upload.png" alt="upload" />
          <img src="/images/instagram.png" alt="Instagram" />
          <img src="/images/twitter.png" alt="Twitter" />
          <img src="/images/downloads.png" alt="Download" />
        </div>
      </footer>
    </div>
  );
};

export default SongsPage;
