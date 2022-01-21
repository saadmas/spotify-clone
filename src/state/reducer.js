import { SET_PLAYLISTS, SET_TOKEN, SET_USER, SET_DISCOVER_WEEKLY } from './actions';

export const initialState = {
  user: null,
  playlists: [],
  isPlaying: false,
  currentSong: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discoverWeekly: action.discoverWeekly,
      };
    default:
      return state;
  }
};

export default reducer;
