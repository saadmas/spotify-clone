import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_left">
        <p>Album and song details</p>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_icon" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon className="footer_icon" fontSize="large" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_icon" />
      </div>
      <div className="footer_right">
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon  className="footer_icon" />
          </Grid>
          <Grid item>
            <VolumeDownIcon className="footer_icon" />
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;