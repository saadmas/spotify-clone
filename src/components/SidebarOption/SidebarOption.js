import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import './SidebarOption.css';

const SidebarOption = ({ title }) => {

  const getIcon = () => {
    switch (title) {
      case 'Home':
        return HomeIcon;
      case 'Search':
        return SearchIcon;
      case 'Your Library':
        return LibraryMusicIcon;
      default:
        return null;
    }
  };

  const Icon = getIcon();

  return Icon ? (
    <section className="sidebar_option">  
      <Icon className="sidebar_option_icon"/>
      <h4>{title}</h4>
    </section>
  ) : (
    <section className="sidebar_option">  
      <p>{title}</p>
    </section>
  );
};

export default SidebarOption;