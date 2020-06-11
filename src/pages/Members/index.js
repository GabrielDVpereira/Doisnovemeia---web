import React, { useState, useEffect, useContext } from "react";
import { MembersContext } from "../../Store/Contexts/MembersContext";

export default function Members() {
  const { members } = useContext(MembersContext);

  return <div>Members</div>;
}
