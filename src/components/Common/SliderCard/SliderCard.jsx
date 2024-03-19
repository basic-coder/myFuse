import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import './sliderCard.css'

const SliderCard = ({data, index}) => {

  return (
    <div className={`slider__card ${index === 1 ? 'active': ''}`}>
        <div className="slider__card_img"><img src={data.logo} alt="logo" /></div>
        <div className="slider__card_content">
            <h3 className="slider__card_company">{data.company}</h3>

            <div className="slider__card_field_location">
                <span>{data.field}</span> <span><IoLocationSharp />{data.location}</span>
            </div>
            <div className="slider__card_role">
               Job Role :  {data.role}
            </div>
        </div>
    </div>
  )
}

export default SliderCard