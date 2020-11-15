import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { getHashFromUrl } from './utils/spotify';
import { useDataLayerValue } from './state/DataLayer';

import './App.css';

const spotifyApi = new SpotifyWebApi();

const App = () => {
  const [accessToken, setAccessToken] = React.useState('');
  const [{}, dispatch] = useDataLayerValue();
  
  // Spotify token logic
  React.useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    const { access_token } = getHashFromUrl();
    window.location.hash = '';

    if (!access_token) {
      return;
    }

    setAccessToken(access_token);
    spotifyApi.setAccessToken(access_token);
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
