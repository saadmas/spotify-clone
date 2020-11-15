import React from 'react';
import Login from './components/Login/Login';

import './App.css';
import { getTokenFromUrl } from './utils/spotify';

const App = () => {

  React.useEffect(() => {
    const token = getTokenFromUrl();
    window.location.hash = '';
  }, []);

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
