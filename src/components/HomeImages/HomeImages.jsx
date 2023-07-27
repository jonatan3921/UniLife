import React, {} from 'react'
import './HomeImages.css'

function HomeImages({home}) {

    const image1 = home?.images[0];
    const image2 = home?.images[1];
    const image3 = home?.images[2];
    const image4 = home?.images[3];

    


  return (
    <div>
        <img className='main-image' src={image1} alt='home'/>
        <div className='extra-images-container'>
            <img src={image2} alt="home" className="extra-images" />
            <img src={image3} alt="home" className="extra-images" />
            <img src={image4} alt="home" className="extra-images" />
        </div>
    </div>
  )
}

export default HomeImages