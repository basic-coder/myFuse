import React from 'react'
import './spotlightSlider.css'
import 'swiper/css';

const SpotlightSlider = ({ items }) => {

  return (
    <div className='spotlightSlider container'>

      <div className="logos">
        <div className="logos-slide">
          {
            items?.map((item, index) => (<img key={index} src={item} alt="" />))
          }
          {/* Duplicate the images to create a seamless loop */}
          {
            items?.map((item, index) => (<img key={`duplicate-${index}`} src={item} alt="" />))
          }
        </div>
      </div>
    </div>
  )
}

export default SpotlightSlider