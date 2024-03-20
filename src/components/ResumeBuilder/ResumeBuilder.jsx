import React from 'react'
import './resumeBuilder.css';
import bgImage from '../../images/resumeBuilder/resumeBuilderImg.png'
import { Link } from 'react-router-dom';
import TextReveal from '../TextReveal/TextReveal';

const ResumeBuilder = () => {
    return (
        <div className='resumeBuilder'>
            <img className='resumeBuilder_img' src={bgImage} alt="" />
            <div className="resumeBuilder_bg"></div>
            <div className="resumeBuilder__content">
            <TextReveal>
                <h3 className='resumeBuilder__title'>Elevate your career with our AI Resume builder</h3>
                <p className='resumeBuilder__desp'>Craft a polished resume swiftly using our AI-powered platform and customizable templates. Impress potential employers with a professionally designed document that highlights your skills and experiences effectively. With our user-friendly interface, creating a standout resume has never been easier or quicker.</p>
                </TextReveal>
                <Link to="/" className='resumeBuilder__btn'>Craft My Resume</Link>
            </div>
        </div>
    )
}

export default ResumeBuilder