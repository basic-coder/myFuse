import React from 'react'
import './spotlightSlider.css'

const SpotlightSlider = ({ items }) => {
  return (
    <div className='spotlightSlider container'>
        {
            items?.map((item, index) => ( <div className='spotlightSlider__img'> <img key={index} src={item} alt="" /> </div>))
        }
    </div>
  )
}

export default SpotlightSlider