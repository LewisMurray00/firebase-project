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
        const storageRef = projectStorage.ref(file.name)
    }, [file])
}