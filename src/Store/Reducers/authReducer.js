const AuthReducer = (state, action) => {
  switch (action.type) {
    case "login":
      localStorage.setItem("x-auth-token", action.token);
      return action.token;
    case "logout":
      localStorage.removeItem("x-auth-token");
      return "";
    case "restoreToken":
      return action.token;
    default:
      return state;
  }
};

export default AuthReducer;
