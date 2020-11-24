import React from 'react';
import Body from '../Body/Body';
import Sidebar from '../Sidebar/Sidebar';

import './Player.css';

const Player = ({ spotifyApi }) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar/>
        <Body />
      </div>
    </div>
  );
};

export default Player;