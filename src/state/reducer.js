import { SET_USER } from "./actions";

export const initialState = {
  user: null,
  playlists: [],
  isPlaying: false,
  currentSong: null
};

const reducer = (state, action) => {
  console.log(action); ///

  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default reducer;