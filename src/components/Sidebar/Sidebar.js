import React from 'react';
import SidebarOption from '../SidebarOption/SidebarOption';

import './Sidebar.css';

const Sidebar = () => {
  return (
    <section className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify logo"
      /> 
      <SidebarOption option="Home" />
      <SidebarOption option="Search" />
      <SidebarOption option="Your Library" />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
    </section>
  );
};

export default Sidebar;