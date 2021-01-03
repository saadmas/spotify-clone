import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../../state/DataLayer';

import './Header.css';

const Header = ({ spotifyApi }) => {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <section className="header">
      <div className="header_left">
        <SearchIcon />
        <input
          placeholder="Search for artists, songs, or podcasts"
          type="text"
        />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt="User's Spotify display picture" />
        <h4>{user?.display_name}</h4>
      </div>
    </section>
  );
};

export default Header;