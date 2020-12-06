import React from 'react';

import { useDataLayerValue } from '../../state/DataLayer';
import SidebarOption from '../SidebarOption/SidebarOption';

import './Sidebar.css';

const Sidebar = () => {
  const [{ playlists }] = useDataLayerValue();

  const renderPlaylists = () => playlists?.items?.map((playlist, index) => (
    <SidebarOption
      key={`playlist_${index}_${playlist.title}`}
      title={playlist.name}
    />
  ));
  
  return (
    <section className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify logo"
      /> 
      <SidebarOption title="Home" />
      <SidebarOption title="Search" />
      <SidebarOption title="Your Library" />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      {renderPlaylists()}
      <hr />
    </section>
  );
};

export default Sidebar;