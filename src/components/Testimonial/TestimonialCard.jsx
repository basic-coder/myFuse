import React from 'react'
import './testimonial.css'

const TestimonialCard = ({data}) => {
  return (
    <div className='testimonial__card'>
        <div className="testimonial__card_top">
            <img src={data.img} alt="tesimonial" />
            <div className="testimonial__card_content">
                <h3 className="testimonial__card_title title">
                    {data.name}
                </h3>
                <h4 className="testimonial__card_role">
                    {data.role}
                </h4>
            </div>
            </div>
            <p className='desp'>
                {
                    <data className="desp">{data.desp}</data>
                }
            </p>

    </div>
  )
}

export default TestimonialCard