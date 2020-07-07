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

  const membersService = {
    async addMember(memberInfo) {
      const member = await api.post("/member", memberInfo);
      console.log(member);
      setMembers([member.data, ...members]);
    },
    removeMember() {},
    editMember() {},
  };
  return (
    <MembersContext.Provider value={{ members, membersService }}>
      {children}
    </MembersContext.Provider>
  );
}
