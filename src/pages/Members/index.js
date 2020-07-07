import React, { useState, useContext } from "react";
import { MembersContext } from "../../Store/Contexts/MembersContext";
import Dropzone from "../../components/Dropzone";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Ring } from "react-spinners-css";

import "./styles.css";

export default function Members() {
  const { members, membersService } = useContext(MembersContext);
  const [selectedFile, setSelectedFile] = useState("");
  const [name, setName] = useState("");
  const [exposed, setExposed] = useState("");
  const [isNewUserRequestLoading, setUserRequestLoading] = useState(false);

  async function createNewMember(event) {
    event.preventDefault();
    try {
      setUserRequestLoading(true);
      const memberInfo = new FormData();
      memberInfo.append("name", name);
      memberInfo.append("exposed", exposed);
      memberInfo.append("photo", selectedFile);
      await membersService.addMember(memberInfo);
      alert("Membro cadastrado com sucesso");
    } catch (error) {
      console.log(error.response.data);
      alert("Houve um problema ao cadastrar o novo membro");
    } finally {
      setUserRequestLoading(false);
    }
  }

  return (
    <div className="member-container">
      <Dropzone onFileUpload={setSelectedFile} />
      <form onSubmit={createNewMember}>
        <label>Nome do membro</label>
        <input type="text" onChange={(event) => setName(event.target.value)} />

        <label>Exposed do membro</label>
        <textarea
          rows="5"
          onChange={(event) => setExposed(event.target.value)}
        />
        {isNewUserRequestLoading ? (
          <Ring className="spinner" color="#a0a0b2" size={40} />
        ) : (
          <button>Novo membro</button>
        )}
      </form>
      <div className="members">
        {members.map((member) => (
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
        ))}
      </div>
    </div>
  );
}
