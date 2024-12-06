'use client';
import React, { useState } from 'react';
import './home.css';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const newSongs = [
    { title: "GNX", artist: "Luther ft. SZA", img: "/images/gnx.png", views: 120, likes: 250 },
    { title: "Backyard", artist: "Travis Scott", img: "/images/backyard.png", views: 200, likes: 340 },
    { title: "Darling I", artist: "Tyler The Creator", img: "/images/chromakopia.png", views: 180, likes: 310 },
    { title: "Natural", artist: "Imagine Dragons", img: "/images/natural.png", views: 300, likes: 420 },
    { title: "Astronomy", artist: "Conan Gray", img: "/images/astronomy.png", views: 150, likes: 270 },
    { title: "Midnight Vibes", artist: "Billie Eilish", img: "/images/midnight.png", views: 230, likes: 360 },
    { title: "Golden Hour", artist: "JVKE", img: "/images/golden.png", views: 250, likes: 400 },
  ];

  const reviews = [
    {
      user: "TheCool234",
      title: "Not Like Us 2024",
      review: "Fantastic song with Kendrick's amazing songwriting. This should be Grammy-winning!",
      rating: 5,
      likes: 150,
    },
    {
      user: "Dragggs",
      title: "Big Dawgs",
      review: "Never heard of this song before, but must say the smoothness hits the vibe perfectly.",
      rating: 4,
      likes: 120,
    },
    {
      user: "Beauty567",
      title: "Bed Chem",
      review: "Sabrina does it again! Her melodic vocals are soothing, and she never disappoints.",
      rating: 4.5,
      likes: 180,
    },
  ];

  const playlists = [
    { title: "Lofi Chill Beats to Study", artist: "The_Lofi_Guy", img: "/images/lofi.png", views: 12982  },
    { title: "Best Pop-Rock Album", artist: "Chill_Rock", img: "/images/poprock.png", views: 8934 },
    { title: "Move and Groove", artist: "Metallica", img: "/images/move-groove.png", views: 1432 },
    { title: "Jazz Vibes", artist: "Miles Davis", img: "/images/jazz.png", views: 2133 },
    { title: "Relax & Unwind", artist: "Norah Jones", img: "/images/relax.png", views: 3462 },
    { title: "Study Time", artist: "Alexis Johaness", img: "/images/study-time.png", views: 231 },
  ];

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-img">
          <img src="/images/headphones.png" alt="headphones" />
        </div>
        <h1 className="logo"> Stereo</h1>
        <div className="nav-links">
          <a href="/home/songs">Songs</a>
          <a href="/home/playlists">Lists</a>
          <a href="/home/activity">Activity</a>
          <a href="/home/socials">Members</a>
        </div>
        <button className="add-button">ADD</button>
      </nav>

      {/* Header */}
      <header className="header">
        <h1>Welcome User, Here's what we've been listening...</h1>
        <p>Explore new songs, read reviews, and curate your playlists on Stereo.</p>
      </header>

      {/* New Songs Section */}
      <section className="section">
        <div className="section-header">
          <h2>New on Stereo</h2>
          <a href="/home/songs">See All</a>
        </div>
        <div className="horizontal-scroll">
          {newSongs.map((song, index) => (
            <div className="card song-card" key={index}>
              <img src={song.img} alt={song.title} />
              <h4>{song.title}</h4>
              <p>{song.artist}</p>
              <div className="card-footer">
                <span>👁 {song.views} </span>
                <span>❤️ {song.likes} </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section">
        <div className="section-header">
          <h2>Popular Reviews</h2>
          <button className="add-review-btn" onClick={() => setShowModal(true)}>
            Add Review
          </button>
        </div>
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h4>{review.title}</h4>
            <p>{review.review}</p>
            <div className="review-footer">
              <div>
                {'⭐'.repeat(Math.floor(review.rating))} 
                {review.rating % 1 ? '⭐️' : ''}
              </div>
              <span>👍 {review.likes}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Popular Playlists Section */}
      <section className="section">
        <div className="section-header">
          <h2>Popular Playlists</h2>
          <a href="/home/songs">See All</a>
        </div>
        <div className="horizontal-scroll">
          {playlists.map((playlist, index) => (
            <div className="card playlist-card" key={index}>
              <img src={playlist.img} alt={playlist.title} />
              <h4>{playlist.title}</h4>
              <p>{playlist.artist}</p>
              <div className="card-footer">
                <span>👁️ {playlist.views}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add Review Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add a Review</h3>
            <textarea placeholder="Write your review here..." />
            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button>Submit</button>
            </div>
          </div>
        </div>
      )}

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

export default Home;
