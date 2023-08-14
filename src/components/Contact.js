import React from 'react'
import '../css/Contact.css'

function Contact(props) {
    return (
        <div className='contactContainer' style={props.style}>
            <div><strong><a href='http://www.linkedin.com/in/jason-morofsky' target="_blank" rel="noreferrer">
                LinkedIn ↗</a></strong></div>
            <div><strong><a href='https://github.com/jmorofsky' target="_blank" rel="noreferrer">
                GitHub ↗</a></strong></div>
            <div><strong><a href='mailto:contact@jasonmorofsky.com' title='Email me' target="_blank" rel="noreferrer">
                contact@jasonmorofsky.com ↗</a></strong></div>
            <div><strong>
                <a href="https://storage.googleapis.com/jasonmorofsky/JasonMorofsky'sResume.pdf" target="_blank" rel="noreferrer">Resume ↗</a></strong></div>
        </div>
    )
}

export default Contact
