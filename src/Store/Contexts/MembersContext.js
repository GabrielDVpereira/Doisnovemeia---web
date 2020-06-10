import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../../services/api";
import { AuthContext } from "./AuthContext";

export const MembersContext = createContext();

export default function MembersContextProvider({ children }) {
  const [members, setMembers] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token) fetchMembers();
  }, [token]);

  async function fetchMembers() {
    try {
      const apiMembers = await api.get("/members");
      setMembers(apiMembers.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <MembersContext.Provider value={{ members }}>
      {children}
    </MembersContext.Provider>
  );
}
