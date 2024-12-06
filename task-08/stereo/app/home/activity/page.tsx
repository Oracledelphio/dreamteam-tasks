'use client';

import React, { useState } from 'react';
import './activity.css';

type TabKeys = 'you' | 'friends' | 'incoming'; // Define tab keys
type Activity = { text: string; id: number; rating: number }; // Define activity type

const ActivityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKeys>('you');
  const [filterRating, setFilterRating] = useState<number | null>(null); // Rating filter state
  const [filterVisible, setFilterVisible] = useState(false); // Filter dropdown visibility

  const activities: Record<TabKeys, Activity[]> = {
    you: [
      { text: 'You listened to, liked and rated Timeless ★★★★ on Wednesday Nov 27, 2024', id: 1, rating: 4 },
      { text: 'You listened to and rated Bad Liar ★★★★ on Wednesday Nov 5, 2024', id: 2, rating: 4 },
      { text: 'You listened to and rated Thick of It ★ on Wednesday Oct 11, 2024', id: 3, rating: 1 },
      { text: 'You listened to, liked and rated Not Like Us ★★★★★ on Wednesday Aug 9, 2024', id: 4, rating: 5 },
      { text: 'You listened to and rated Natural ★★★ on Wednesday Aug 31, 2024', id: 5, rating: 3 }
    ],
    friends: [
      { text: 'Alex rated Evermore ★★★★ on Tuesday Nov 26, 2024', id: 5, rating: 4 },
      { text: 'Taylor added Chill Beats to their playlist on Monday Nov 20, 2024', id: 6, rating: 5 },
      { text: 'Bethany rated Evermore ★★★★★ on Tuesday July 21, 2024', id: 7, rating: 5 },
      { text: 'Jaik rated One Dance ★★ on Tuesday Feb 2, 2024', id: 8, rating: 2 },
    ],
    incoming: [
      { text: 'New song alert: Paradise ★★★★ added to your feed on Friday Dec 1, 2024', id: 9, rating: 4 },
      { text: 'New song alert: Popular ★★★★★ added to your feed on Friday Dec 1, 2024', id: 10, rating: 5 },
      { text: 'New song alert: Die With A Smile ★★★ added to your feed on Friday Dec 1, 2024', id: 11, rating: 3 },
    ],
  };

  // Filter logic
  const filteredActivities = filterRating
    ? activities[activeTab].filter((activity) => activity.rating >= filterRating)
    : activities[activeTab];

  return (
    <div className="activity-page">
      {/* Top Navigation */}
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

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'you' ? 'active' : ''}`}
          onClick={() => setActiveTab('you')}
        >
          You
        </button>
        <button
          className={`tab ${activeTab === 'friends' ? 'active' : ''}`}
          onClick={() => setActiveTab('friends')}
        >
          Friends
        </button>
        <button
          className={`tab ${activeTab === 'incoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('incoming')}
        >
          Incoming
        </button>
      </div>

      {/* Activities List */}
      <div className="activities">
        {filteredActivities.map((activity) => (
          <div key={activity.id} className="activity">
            {activity.text}
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button
          className="bottom-nav-item"
          onClick={() => setFilterVisible(!filterVisible)} // Toggle filter dropdown
        >
          Activity Filters
        </button>
        <button className="bottom-nav-item">Contact</button>
        <button className="bottom-nav-item" onClick={() => window.location.reload()}>
          Reload
        </button>
      </div>

      {/* Filter Dropdown */}
      {filterVisible && (
        <div className="filter-dropdown">
          <h4>Filter by Rating:</h4>
          <button onClick={() => setFilterRating(4)}>★★★★ and above</button>
          <button onClick={() => setFilterRating(2)}>★★ and above</button>
          <button onClick={() => setFilterRating(null)}>Clear Filter</button>
        </div>
      )}
    </div>
  );
};

export default ActivityPage;
