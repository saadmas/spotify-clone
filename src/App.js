import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { getHashFromUrl } from './utils/spotify';
import { useDataLayerValue } from './state/DataLayer';
import { SET_TOKEN, SET_USER } from './state/actions';

import './App.css';

const spotifyApi = new SpotifyWebApi();

const App = () => {
  const [{}, dispatch] = useDataLayerValue();

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

    if (!window.location.hash) {
      return;
    }

    setSpotifyAccessToken();
    setSpotifyUser();
  }, []);

  return (
    <div className="app">
      {
        accessToken ? <Player /> : <Login />
      }
    </div>
  );
}

export default App;
