import React from 'react'
import './footer.css'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Footer = () => {

    const footerLinks = [
        {
            title: "Useful Links",
            links: [
                {
                    title: "Home",
                    link: '/'
                },
                {
                    title: "About Us",
                    link: '/'
                },
                {
                    title: "Login",
                    link: '/'
                },
                {
                    title: "Terms of service",
                    link: '/'
                },
                {
                    title: "Privacy policy",
                    link: '/'
                },
            ]
        },
        {
            title: "Our Service",
            links: [
                {
                    title: "Application",
                    link: '/'
                },
                {
                    title: "Legal policy",
                    link: '/'
                }, {
                    title: "Systems",
                    link: '/'
                }, {
                    title: "About",
                    link: '/'
                }, {
                    title: "FAQ",
                    link: '/'
                },
            ]
        },
        {
            title: "Contact",
            links: [
                {
                    title: "MyFuse.in Residency Rd, Shanthala Nagar Ashok Nagar, Bengaluru Karnataka 560025",
                    link: 'javascript(0)'
                },
                {
                    title: "+91 7975364977",
                    link: 'tel:917975364977'
                },
                {
                    title: "contact@myfuse.in",
                    link: 'mailTo:contact@myfuse.in'
                },
            ]
        }
    ]

    return (
        <footer className='footer container'>
            <div className="footer__top">
                <div className="footer__top_left">
                    <h2 className='title'>MyFuse<span>.</span>in</h2>
                </div>
                <div className="footer__top_right">
                    <p>Unlock endless career possibilities with Myfuse – the platform that bridges gap between Students and Job opportunities in India.</p>
                    <ul className="footer__social">
                        <li><Link to="/"><IoLogoTwitter /></Link></li>
                        <li><Link to="/"><IoLogoFacebook /></Link></li>
                        <li><Link to="/"><IoLogoInstagram /></Link></li>
                        <li><Link to="/"><IoLogoLinkedin /></Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer__mid">
                {
                    footerLinks.map((items,index) => (
                        <ul key={index} className='footer__links'>
                            <h4>{items.title}</h4>
                            {
                                items.links.map((list, index) => (
                                    <li key={index}><Link to={list.link}>{list.title}</Link></li>
                                ))
                            }
                        </ul>
                    ))
                }
            </div>
            <p className='copyright'>Copyright ©2024 MyFuse.In. All Rights Reserved</p>
        </footer>
    )
}

export default Footer