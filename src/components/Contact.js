import React from 'react'
import '../css/Contact.css'
import Resume from '../Resume.pdf'

function Contact(props) {
    return (
        <div className='contactContainer' style={props.style}>
            <div><strong><a href='http://www.linkedin.com/in/jason-morofsky' target="_blank">
                LinkedIn ↗</a></strong></div>
            <div><strong><a href='https://github.com/jmorofsky' target="_blank">
                GitHub ↗</a></strong></div>
            <div><strong><a href='mailto:contact@jasonmorofsky.com' title='Email me' target="_blank">
                contact@jasonmorofsky.com ↗</a></strong></div>
            <div><strong>
                <a href={Resume} download='jason_morofsky_resume' title='Download me'>
                    Resume ↓</a></strong></div>
        </div>
    )
}

export default Contact
