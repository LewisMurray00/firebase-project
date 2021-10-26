import React from 'react'
import { useState } from 'react';

const UploadForm = () => {

    //Creating an array of allowed image types
    const imgTypes = [
        'image/png',
        'image/jpeg'
    ];

    const [file,setFile] = useState(null);

    const changeHandler = (e)=>{
        let selected = e.target.files[0];
        //set the state if a file is selected
        if(selected){
            setFile(selected);
            //file is stored in local state

        }
    }

    return (
        <form>
            <input type="file" onChange={changeHandler} />
        </form>
    )
}

export default UploadForm;
