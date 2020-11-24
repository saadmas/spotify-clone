import { SET_TOKEN, SET_USER } from "./actions";

export const initialState = {
  user: null,
  playlists: [],
  isPlaying: false,
  currentSong: null,
  token: null
};

const reducer = (state, action) => {
  console.log(action.type, action); ///

  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      }
    default:
      return state;
  }
};

export default reducer;