import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const changeHandler = (e) => {
    console.log("changed");
    let selected = e.target.files[0];
    console.log("selected: ", selected);
    if (selected) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an Image (png or jpeg)");
    }
  };

  return (
    <>
      <h3>Upload Form</h3>
      <form>
        <input
          type="file"
          onChange={changeHandler}
          accept="image/png, image/jpeg"
        ></input>
        <div className="output">
          {error && <div className="error">{error} </div>}
          {file && <div className="succes">{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile}/>}
        </div>
      </form>
    </>
  );
};

export default Upload;
