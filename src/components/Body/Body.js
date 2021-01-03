import React from 'react';

import Header from '../Header/Header';

import './Body.css';

const Body = ({ spotifyApi }) => {
  return (
    <section className="body">
      <Header spotifyApi={spotifyApi} />
    </section>
  );
};

export default Body;