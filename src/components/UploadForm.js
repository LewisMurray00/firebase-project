import React from 'react'
import { useState } from 'react';
import ProgressBar from './progressBar';


const UploadForm = () => {

    //Creating an array of allowed image types
    const imgTypes = [
        'image/png',
        'image/jpeg',
        'image/jpg'
    ];
    
    //creating the error
    const [error, setError] = useState(null);

    const [file,setFile] = useState(null);

    const changeHandler = (e)=>{
        let selected = e.target.files[0];
        //set the state if a file is selected
        if(selected && imgTypes.includes(selected.type)){
            setFile(selected);
            setError('');
            //file is stored in local state
        } else {
            setFile(null);
            setError("Please select an image file (png/jpeg/jpg)")
        }
    }

    return (
        <form className="upload-form">
            <label className="upload-label">
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;
