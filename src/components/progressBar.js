import react, {useEffect} from "react";
import useStorage from "../hooks/useStorage";

import React from 'react'

const ProgressBar = ({file, setFile}) => {

    //recieve the information for the url and the progress of the image uploaded
    const {url, progress} = useStorage(file);

    //setting file to null once the value is 100% to remove the bar
    useEffect(()=>{
        if(url){
            setFile(null)
        }
    }, [url, setFile])

    return (
        <div className="progress-bar" style={{width: progress + '%'}}></div>

    )
}

export default ProgressBar
