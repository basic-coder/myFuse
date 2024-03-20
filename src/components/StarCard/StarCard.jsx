import React from 'react'
import './starCard.css';
import starCardImg from '../../images/starCard/starCard.png'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const StarCard = () => {
  return (
    <div className='starCard'>
        <AiFillStar />
        <div className="starCard__left">
            <h3 className='title'>Re-imagine MyFuse : Design & Code Competition</h3>
            <p className='desp'>Design your Future, Code your Success</p>
            <Link to="/register" className="btn">Register</Link>
            <p className='desp small__desp'>Register to win cash & Exciting Prices</p>
        </div>
        <div className="starCard__right">
            <img src={starCardImg} alt="starCardImg" />
        </div>
    </div>
  )
}

export default StarCard