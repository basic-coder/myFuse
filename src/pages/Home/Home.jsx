import React from 'react'
import { Link } from 'react-router-dom'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import TitleDescriptionBox from '../../components/Common/TitleDescriptionBox/TitleDescriptionBox'
import SpotlightSlider from '../../components/SpotlightSlider/SpotlightSlider'

import logoImage1 from '../../images/spotlight/seagate.png'
import logoImage2 from '../../images/spotlight/cisco.png'
import logoImage3 from '../../images/spotlight/flipkart.png'
import logoImage4 from '../../images/spotlight/accenture.png'
import logoImage5 from '../../images/spotlight/american-express.png'
import StarCard from '../../components/StarCard/StarCard'
import Newsletter from '../../components/Newsletter/Newsletter'

const Home = () => {

  const logoImages = [logoImage1,logoImage2,logoImage3,logoImage4,logoImage5]

  return (
    <div className='home container'>
        <HeroBanner />
        <TitleDescriptionBox border={true} title="Company Spotlight" description="Discover the essence of company in the Spotlight. Learn more about the mission, values, and achievements. Get a closer look at what sets this the company apart." />
        <SpotlightSlider items={logoImages} />
        <TitleDescriptionBox border={false} title="Regular Challenge" description="Elevate your skills and embrace growth with our Regular Challenge – a daily journey to unlock your full potential." />
        <StarCard />
        <Newsletter title="Join Our Newsletter" description='"Stay in the loop and never miss out on our latest updates and exclusive content. Subscribe to our newsletter to receive fresh insights and news delivered right to your inbox."' />
    </div>
  )
}

export default Home