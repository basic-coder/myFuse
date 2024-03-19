import React from 'react'
import { Link } from 'react-router-dom'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import TitleDescriptionBox from '../../components/Common/TitleDescriptionBox/TitleDescriptionBox'

const Home = () => {
  return (
    <div className='home container'>
        <HeroBanner />
        <TitleDescriptionBox border={true} title="Company Spotlight" description="Discover the essence of company in the Spotlight. Learn more about the mission, values, and achievements. Get a closer look at what sets this the company apart." />
        <TitleDescriptionBox border={false} title="Regular Challenge" description="Elevate your skills and embrace growth with our Regular Challenge – a daily journey to unlock your full potential." />
    </div>
  )
}

export default Home