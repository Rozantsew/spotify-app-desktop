export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQCJio4aBfqOmcPmFHaOhYFoJfk6Z11-ftPra1r0vpc3GXMpoGpm9HBzxrcQYS9rR4RZ6Lt6V89uS8Zvy0SOUQo2p1d48B2_Kj1MC00bQNe7gWLmEy07qkYYo2DReYh31tm69j1a-uV-UWDTV3MeiqryAbSi0h7dkia-j9xb4ilYaqhb",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
