import React from 'react'
import './HomeImages.css'

function HomeImages({home}) {
  let image1;
  let image2;
  let image3;
  let image4;
  if (home?.images !== undefined) {
    image1 = home?.images[0];
    image2 = home?.images[1];
    image3 = home?.images[2];
    image4 = home?.images[3];
  }


  return (
    <div className='images-container'>
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