'use client';
import React, { useState } from 'react';
import Head from 'next/head'; // Ensure this import is at the top
import './styles/globals.css';
import './styles/custom.css';

const Home = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dummyAccount = {
    email: 'user@stereo.com',
    password: 'password123',
  };

  const toggleSignInModal = () => {
    setShowSignIn(!showSignIn);
    setEmail('');
    setPassword('');
    setError('');
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === dummyAccount.email && password === dummyAccount.password) {
      setError('');
      window.location.href = '/home'; // Redirect to the home page
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Stereo Landing Page</title>
      </Head>

      <div className="container">
        {/* Header Section */}
        <header className="header">
          <div className="logo">
            <img
              src="/images/headphones.png"
              alt="headphones"
              className="logo-image"
            />
            <span className="logo-text">Stereo</span>
          </div>
          <nav className="nav">
            <button className="nav-link" onClick={toggleSignInModal}>
              Sign in
            </button>
            <a href="#" className="nav-link">
              Create Account
            </a>
            <a href="/home/songs" className="nav-link">
              Songs
            </a>
            <a href="/home/playlists" className="nav-link">
              Playlist
            </a>
            <a href="/home/socials" className="nav-link">
              Socials
            </a>
          </nav>
          <button className="add-button">ADD +</button>
        </header>

        {/* Main Section */}
        <main className="main">
          {/* Central Image */}
          <div className="image-container">
            <img
              src="/images/Landings.png"
              alt="Landing Page Image"
              className="main-image"
            />
          </div>

          {/* Text Content */}
          <p className="main-text">
            “Track the songs you love. Save the ones you want to discover. Share
            the tunes that move you.”
          </p>

          {/* Call to Action */}
          <button className="cta-button" onClick={toggleSignInModal}>
            Get Started - it's free
          </button>
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

        {/* Sign-In Modal */}
        {showSignIn && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Welcome Back!</h2>
              <form className="sign-in-form" onSubmit={handleSignIn}>
                <input
                  type="email"
                  placeholder="Email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className="sign-in-button">
                  Sign In
                </button>
                <p className="modal-text">
                  Don’t have an account?{' '}
                  <a href="#" className="create-account-link">
                    Create Account
                  </a>
                </p>
              </form>
              <button className="close-modal" onClick={toggleSignInModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
