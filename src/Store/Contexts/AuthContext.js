import React, { createContext, useReducer, useEffect } from "react";
import authReducer from "../Reducers/authReducer";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [token, dispatch] = useReducer(authReducer, "");
  const history = useHistory();

  useEffect(() => {
    const localStorageToken = localStorage.getItem("x-auth-token");
    if (localStorageToken) {
      dispatch({ type: "restoreToken", token: localStorageToken });
    }
  }, []);

  useEffect(() => {
    if (token) {
      history.push("/members");
    } else {
      history.push("/login");
    }
  }, [history, token]);

  const authServices = {
    async login(email, password) {
      const response = await api.post("/admin/auth", { email, password });
      dispatch({ type: "login", token: response.headers["x-auth-token"] });
    },
  };
  return (
    <AuthContext.Provider value={{ authServices, token, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
