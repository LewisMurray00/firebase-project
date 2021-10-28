import React, {useState} from 'react'
import GalleryTitle from './galleryTitle'
import UploadForm from './UploadForm'
import ImageGrid from './imageGrid'
import Modal from './modal'

const Hero = ({ handleLogout }) => {

    //created a use state for the image selected for use in the modal
    const [selectedImg, setSelectedImg] = useState(null)

    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Log out</button>
            </nav>
            <GalleryTitle />
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            <Modal selectedImg={selectedImg}/>
        </section>
    )
}

export default Hero
