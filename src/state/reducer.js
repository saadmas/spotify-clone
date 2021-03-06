import { SET_PLAYLISTS, SET_TOKEN, SET_USER, SET_DISCOVER_WEEKLY } from "./actions";

export const initialState = {
  user: null,
  playlists: [],
  isPlaying: false,
  currentSong: null,
  /// remove after dev
  // token: "BQD6ad6BeiW6uTTA6mf1UISs-xFqsjGa1cZLUujKta9rH4AeK3YT0pf2_Bhf-clUmrW_9pTjm6aRkmLPB13zkcYlCe2R7RWPntysY8ta8t51BJpFDi5jZLhLBYd8VdKmkS5n8ttcMzT_TbHj5pmIc5rnf1rbH-SUAw"
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
    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists
      }
    case SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discoverWeekly: action.discoverWeekly
      }
    default:
      return state;
  }
};

export default reducer;