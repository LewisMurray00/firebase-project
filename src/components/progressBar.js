import react from "react";
import useStorage from "../hooks/useStorage";

import React from 'react'

const ProgressBar = ({file, setFile}) => {

    //recieve the information for the url and the progress of the image uploaded
    const {url, progress} = useStorage(file);


    return (
        <div className="progress-bar" style={{width: progress + '%'}}>
            progress
        </div>
    )
}

export default ProgressBar
