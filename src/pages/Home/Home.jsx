import React from 'react'

import HeroBanner from '../../components/HeroBanner/HeroBanner'
import TitleDescriptionBox from '../../components/Common/TitleDescriptionBox/TitleDescriptionBox'
import SpotlightSlider from '../../components/SpotlightSlider/SpotlightSlider'

import logoImage1 from '../../images/spotlight/seagate.png'
import logoImage2 from '../../images/spotlight/cisco.png'
import logoImage3 from '../../images/spotlight/flipkart.png'
import logoImage4 from '../../images/spotlight/accenture.png'
import logoImage5 from '../../images/spotlight/american-express.png'
import logoImage6 from '../../images/spotlight/tata.png'
import logoImage7 from '../../images/spotlight/data-pattern.png'
import logoImage8 from '../../images/spotlight/ncr.png'

import StarCard from '../../components/StarCard/StarCard'
import Newsletter from '../../components/Newsletter/Newsletter'
import RecentJobs from '../../components/RecentJobs/RecentJobs'
import MyfuseWorks from '../../components/MyfuseWorks/MyfuseWorks'
import SpotlightCards from '../../components/SpotlightCards/SpotlightCards'
import ResumeBuilder from '../../components/ResumeBuilder/ResumeBuilder'
import Testimonial from '../../components/Testimonial/Testimonial'

const Home = () => {

  const logoImages = [logoImage1,logoImage2,logoImage3,logoImage4,logoImage5,logoImage6,logoImage7,logoImage8]

  return (
    <div className='home container'>
        <HeroBanner />
        <SpotlightSlider items={logoImages} />
        <TitleDescriptionBox border={false} title="Regular Challenge" description="Elevate your skills and embrace growth with our Regular Challenge – a daily journey to unlock your full potential." />
        <StarCard />
        <MyfuseWorks />
        <SpotlightCards />
        <RecentJobs />
        <ResumeBuilder />
        <Testimonial />
        <Newsletter title="Join Our Newsletter" description='"Stay in the loop and never miss out on our latest updates and exclusive content. Subscribe to our newsletter to receive fresh insights and news delivered right to your inbox."' />
    </div>
  )
}

export default Home