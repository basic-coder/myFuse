import React from 'react'
import './newsletter.css'

const Newsletter = ({title,description}) => {
  return (
    <div className='newsletter'>
        <div className="newsletter__left">
            <h3 className='title'>{title}</h3>
        </div>
        <div className="newsletter__right">
            <p>{description}</p>
            <form className="newsletter__input">
                <input type="email" placeholder='Email' required /><button className='btn'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter