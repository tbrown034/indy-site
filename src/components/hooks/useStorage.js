import { useState, useEffect } from "react";
import {storage} from "../firebase/config"

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);


  useEffect(() => {
    // create reference
    const storageRef = ref(storage, `PupImages/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => setUrl(url));

      }
    );
  }, []);
  


  return   { progress, url, error };
};

export default useStorage;
