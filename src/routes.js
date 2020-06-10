import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Store/Contexts/AuthContext";

import Login from "./pages/Login ";
import Members from "./pages/Members";

const Routes = () => (
  <BrowserRouter>
    <AuthContextProvider>
      <Route component={Login} path="/login" />
      <Route component={Members} path="/members" />
    </AuthContextProvider>
  </BrowserRouter>
);

export default Routes;
