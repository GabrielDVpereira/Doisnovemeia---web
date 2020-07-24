import React from "react";
import "./styles.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export default function MemberCard({ member }) {
  return (
    <div className="member" key={member._id}>
      <img src={member.photoUrl} alt="member" height="200px" />
      <p>{member.name}</p>
      <p>{member.exposed}</p>
      <div className="edit-member" key={member._id}>
        <FaTrashAlt
          color="#9c0f0f"
          onClick={() => console.log("remove member")}
        />
        <FaEdit onClick={() => console.log("edit member")} />
      </div>
    </div>
  );
}
