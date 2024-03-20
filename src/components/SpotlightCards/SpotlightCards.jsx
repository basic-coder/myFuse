import React from 'react'
import './spotlightCards.css'
import TitleDescriptionBox from '../Common/TitleDescriptionBox/TitleDescriptionBox'
import { AiFillStar } from 'react-icons/ai'

const SpotlightCards = () => {

  const dataArray = [
    {
      title: "Brand Promotion",
      desp: `"Join us to showcase your company's culture and career opportunities, attracting top talent to drive your organization's success."`
    },
    {
      title: "Product Promotion",
      desp: `"Highlight your innovative tools and solutions tailored for job seekers, empowering them to excel in their job search and career development."`
    },
    {
      title: "Product Promotion",
      desp: `"Feature your career services designed to enhance job seekers' skills and employability, offering tailored support for their professional growth."`
    },
  ]

  return (
    <div className='spotlightCards'>
      <TitleDescriptionBox border={true} title="Company Spotlight" description="Discover the essence of company in the Spotlight. Learn more about the mission, values, and achievements. Get a closer look at what sets this the company apart." />

      <div className="spotlightCards__container">

        {
          dataArray.map((items, index) => (
            <div key={index} className={`spotlightCards__card ${index % 2 === 0 ? 'left' : ''}`}>
              <AiFillStar />
              <TitleDescriptionBox title={items.title} description={items.desp} /> 
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default SpotlightCards