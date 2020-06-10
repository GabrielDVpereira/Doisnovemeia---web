import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Store/Contexts/AuthContext";

import Login from "./pages/Login ";
import Members from "./pages/Members";
import MembersContextProvider from "./Store/Contexts/MembersContext";

const Routes = () => (
  <BrowserRouter>
    <AuthContextProvider>
      <Route component={Login} path="/login" />
      <MembersContextProvider>
        <Route component={Members} path="/members" />
      </MembersContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

export default Routes;
