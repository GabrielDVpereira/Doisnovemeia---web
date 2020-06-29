import React, { useState, useContext } from "react";
import { MembersContext } from "../../Store/Contexts/MembersContext";
import Dropzone from "../../components/Dropzone";
import "./styles.css";

export default function Members() {
  const { members } = useContext(MembersContext);
  const [selectedFile, setSelectedFile] = useState("");
  return (
    <div className="container">
      <Dropzone onFileUpload={setSelectedFile} />
      <form onSubmit={() => {}}>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" />
        <input type="date" placeholder="Idade" />
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
