import React from 'react'
import { Link } from 'react-router-dom'
import './heroBanner.css'

import heroCard1 from '../../images/heroSection/heroCard1.svg'
import heroCard2 from '../../images/heroSection/heroCard2.svg'
import heroCard3 from '../../images/heroSection/heroCard3.svg'
import SliderCard from '../Common/SliderCard/SliderCard'

const HeroBanner = () => {

  const DataArray = [
    {
      company: "Deloitte",
      field: "Technology and IT",
      location: "Bengaluru",
      role: "Associate Analyst",
      logo: heroCard1
    },
    {
      company: "AirBus",
      field: "Technology and IT",
      location: "Bengaluru",
      role: "Associate Analyst",
      logo: heroCard2
    },
    {
      company: "Amdocs",
      field: "Technology and IT",
      location: "Bengaluru",
      role: "Associate Analyst",
      logo: heroCard3
    }
  ]

  return (
    <div className='hero__banner'>
        <div className="hero__banner_left">
            <h2 className='title'>Your Gateway to Infinite Opportunities</h2>
            <p className='desp'>Discover a world of opportunities with internships, projects, and a gateway to your professional future. Join a vibrant community that paves the way to success.</p>
            <Link to="/" className='btn' >Open the Gateway</Link>
        </div>
        <div className="hero__banner_right">
            {DataArray.map((data,index)=> <SliderCard key={index} data={data} />)}
        </div>
    </div>
  )
}

export default HeroBanner