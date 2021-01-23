import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { useDataLayerValue } from '../../state/DataLayer';
import Header from '../Header/Header';

import './Body.css';

const discoverWeeklyFallBackImageUrl = 'https://i.scdn.co/image/11258b6c69204820d79575e0587f415735db2350';

const Body = ({ spotifyApi }) => {
  const [{ discoverWeekly }, dispatch] = useDataLayerValue();

  const renderSongRows = () => {
    const songRows = discoverWeekly?.tracks.items.map(item => <SongRow track={item.track} />) || [];
    return songRows;
  };

  return (
    <section className="body">
      <Header spotifyApi={spotifyApi} />
      <div className="body_info">
        <img
          src={discoverWeekly?.images[0].url || discoverWeeklyFallBackImageUrl}
          alt="Discover Weekly picture"
        />
        <div className="body_info_text">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" />
          <FavoriteIcon fontSize="large"/>
          <MoreHorizIcon />
        </div>
        {renderSongRows()}
      </div>
    </section>
  );
};

export default Body;