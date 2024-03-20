import React from 'react'
import './myfuseWorks.css'
import Image1 from '../../images/myfuseWorks/myfuseWorks1.png'
import Image2 from '../../images/myfuseWorks/myfuseWorks2.png'
import Image3 from '../../images/myfuseWorks/myfuseWorks3.png'

const MyfuseWorks = () => {

  const dataArray = [{
    title: "Streamlined Resume Creation",
    para1: "Effortlessly create tailored resumes in minutes with our AI-powered platform. Say goodbye to hours of manual formatting and editing!",
    para2: "Our intuitive interface and smart templates guide you through the process, ensuring your resume stands out to employers.",
    img: Image1
  },
  {
    title: "Competitive Edge",
    para1: "Unlock your potential! Join our array of competitions hosted by our companies, where students showcase skills, network, and win coveted opportunities.",
    para2: "Seize the chance to shine in real-world scenarios, impressing industry leaders while honing your talents and gaining invaluable experience.",
    img: Image2
  },
  {
    title: "Skill Mastery Hub",
    para1: "Elevate your skills with our comprehensive assessment tools, designed to bolster your job readiness. Track your progress, identify strengths, and target areas for growth.",
    para2: "Empower your career journey with targeted assessments that bridge the gap between education and employment, equipping you with the competencies demanded by today's workforce.",
    img: Image3
  }
  ]

  return (
    <div className='myfuseWorks container'>
      <h3 className='title'>How  Myfuse works</h3>

      <div className="myfuseWorks__container">
        {
          dataArray.map((data, index) => (
            <div key={index} className={`myfuseWorks__card ${index % 2 != 0 ? 'left' : '' }`}>
              <div className="myfuseWorks__card_left">
                <h4 className='title'>{data.title}</h4>
                <p className='desp'>{data.para1}</p>
                <p className='desp'>{data.para2}</p>
              </div>
              <div className="myfuseWorks__card_right">
                <img src={data.img} alt="demo" />
              </div>
            </div>
          ))
        }
      </div>



    </div>
  )
}

export default MyfuseWorks