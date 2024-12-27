function reducer(state = { user: null }, action) {
  switch (action.type) {
    case "user-logged-in":
      return {
        ...state,
        user: {
          userId: action.payload.userId,
        },
      };
    case "user-logged-out":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
