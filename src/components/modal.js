import React from 'react'

const Modal = ({selectedImg, setSelectedImg}) => {

    const handleClick = (e)=> {
        if(e.target.classList.contains('backdrop-modal')){
            setSelectedImg(null);
        }
    }

    return (
        <div className="backdrop-modal" onClick={handleClick}>
            <img src={selectedImg} alt="modal" />
        </div>
    )
}

export default Modal
