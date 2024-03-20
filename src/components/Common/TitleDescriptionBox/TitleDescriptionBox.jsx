import React from 'react'
import './titleDescriptionBox.css'
import TextReveal from '../../TextReveal/TextReveal'

const TitleDescriptionBox = ({title,description,border}) => {
  return (
    <TextReveal>
    <div className={`title__description container ${border ? 'border' : ''}`}>
      <div className={`title__box ${border ? 'border' : ''}`}><h3 className='title'>{title}</h3></div>
        
      <div className={`desp__box ${border ? 'border' : ''}`}><p className='desp'>{description}</p></div>
    </div>
    </TextReveal>     
  )
}

export default TitleDescriptionBox