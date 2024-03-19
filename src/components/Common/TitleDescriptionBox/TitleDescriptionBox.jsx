import React from 'react'
import './titleDescriptionBox.css'

const TitleDescriptionBox = ({title,description,border}) => {
  return (
    <div className={`title__description container ${border ? 'border' : ''}`}>
        <div className={`title__box ${border ? 'border' : ''}`}><h3 className='title'>{title}</h3></div>
        <div className={`desp__box ${border ? 'border' : ''}`}><p className='desp'>{description}</p></div>      
    </div>
  )
}

export default TitleDescriptionBox