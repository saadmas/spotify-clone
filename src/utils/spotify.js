const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = '26cdaf4f200e4c388d9eff3bd7cb9c27';
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state'
];

export const loginUrl =
  `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () =>
  window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      const [key, value] = item.split('=');
      initial[key] = decodeURIComponent(value);
      return initial;
    }, {});