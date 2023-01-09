import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import {storage} from "../components/firebase/config"


const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [imageList, setImageList] = useState([])
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
  useEffect(() => {
    const imageListRef = ref(storage, "PupImages/")
    listAll(imageListRef).then((response) => {
        response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
                setImageList((prev) => [...prev, url]);
            })

        })

    })

  }, [])


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
      
      {imageList.map((url) => {
        return <img key={Math.random()} src={url}></img>

      })}

    </>
  );
};

export default Upload;
