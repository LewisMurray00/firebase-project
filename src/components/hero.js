import React from 'react'
import GalleryTitle from './galleryTitle'

const Hero = ({ handleLogout }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Log out</button>
            </nav>
            <GalleryTitle />
        </section>
    )
}

export default Hero
