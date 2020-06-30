import React, { useState, useContext } from "react";
import { MembersContext } from "../../Store/Contexts/MembersContext";
import Dropzone from "../../components/Dropzone";
import "./styles.css";

export default function Members() {
  const { members } = useContext(MembersContext);
  const [selectedFile, setSelectedFile] = useState("");
  return (
    <div className="member-container">
      <Dropzone onFileUpload={setSelectedFile} />
      <form onSubmit={() => {}}>
        <label>Nome do membro</label>
        <input type="text" />

        <label>Exposed do membro</label>
        <textarea rows="5" />

        <button>Novo membro</button>
      </form>
      <div className="members">
        {members.map((member) => (
          <div className="member" key={member._id}>
            <img src={member.photoUrl} alt="member" height="200px" />
            <p>{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
