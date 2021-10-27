import { useState, useEffect } from "react";
import { projectStorage } from "../fire";

//creating a new hook for handling the fire uploads

const useStorage =(file)=>{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url,setUrl] = useState(null);

    //use the storage sdk to upload the image to the database and load images 
    useEffect(()=>{
        //references to a file inside the firebase storage
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on('state_changed', (snap)=>{
            //creates a snapshot in time of the upload
            
            //work out the total percentage of the upload
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err)=>{
            //Catch the error if there has been a problem uploading
            setError(err)
        }, async()=>{
            //Check to see if the file has been successfully uploaded
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })
    }, [file])

    return {progress, url, error }
}

export default useStorage;