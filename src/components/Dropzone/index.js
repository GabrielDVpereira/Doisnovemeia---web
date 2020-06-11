import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaUserAlt } from "react-icons/fa";

import "./styles.css";

export default function Dropzone({ onFileUpload }) {
  const [fileUrl, setFileUrl] = useState("");
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);
      setFileUrl(fileUrl);
      onFileUpload(fileUrl);
    },
    [onFileUpload]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {fileUrl ? (
        <>
          <img src={fileUrl} alt="preview" />
          <div className="change-photo">Clique para mudar</div>
        </>
      ) : (
        <p>
          <FaUserAlt />
          Escolher uma foto
        </p>
      )}
    </div>
  );
}
