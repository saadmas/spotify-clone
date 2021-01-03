import React from 'react';

import Header from '../Header/Header';

import './Body.css';

const Body = ({ spotifyApi }) => {
  return (
    <section className="body">
      <Header spotifyApi={spotifyApi} />
      <div className="body_info">
        <img
          src="https://i.scdn.co/image/11258b6c69204820d79575e0587f415735db2350"
          alt="Discover Weekly picture"
        />
        <div className="body_info_text">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Description...</p>
        </div>
      </div>
    </section>
  );
};

export default Body;