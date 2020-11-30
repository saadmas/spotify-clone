import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import './SidebarOption.css';

const SidebarOption = ({ option }) => {

  const getIcon = () => {
    switch (option) {
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
      <p>{option}</p>
    </section>
  ) : (
    <section className="sidebar_option">  
      <h4>{option}</h4>
    </section>
  );
};

export default SidebarOption;