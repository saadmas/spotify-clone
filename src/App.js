import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { getHashFromUrl } from './utils/spotify';
import { useDataLayerValue } from './state/DataLayer';
import { SET_TOKEN, SET_USER, SET_PLAYLISTS, SET_DISCOVER_WEEKLY } from './state/actions';

import './App.css';

const spotifyApi = new SpotifyWebApi();

const App = () => {
  const [{ token }, dispatch] = useDataLayerValue();

  React.useEffect(() => {
    const setSpotifyAccessToken = () => {
      const { access_token } = getHashFromUrl();
      window.location.hash = '';

      if (!access_token) {
        //* Error handling
        return;
      }

      dispatch({ type: SET_TOKEN, token: access_token });
      spotifyApi.setAccessToken(access_token);
    };

    const setSpotifyUser = async () => {
      const user = await spotifyApi.getMe();
      //* Error handling
      dispatch({ type: SET_USER, user });
    };
    
    const setSpotifyPlaylists = async () => {
      const playlists = await spotifyApi.getUserPlaylists();
      dispatch({ type: SET_PLAYLISTS, playlists });
    };

    const setDiscoverWeekly = async () => {
      const discoverWeekly = await spotifyApi.getPlaylist('37i9dQZEVXcHfFdTRrWJga');
      dispatch({ type: SET_DISCOVER_WEEKLY, discoverWeekly });
    };

    if (!window.location.hash) {
      return;
    }

    setSpotifyAccessToken();
    setSpotifyUser();
    setSpotifyPlaylists();
    setDiscoverWeekly();
  }, [dispatch]);

  return (
    <div className="app">
      {
        token ? <Player spotifyApi={spotifyApi}/> : <Login />
      }
    </div>
  );
}

export default App;
