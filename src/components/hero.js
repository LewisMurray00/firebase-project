import React from 'react'
import GalleryTitle from './galleryTitle'
import UploadForm from './UploadForm'
import ImageGrid from './imageGrid'

const Hero = ({ handleLogout }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Log out</button>
            </nav>
            <GalleryTitle />
            <UploadForm />
            <ImageGrid />
        </section>
    )
}

export default Hero
