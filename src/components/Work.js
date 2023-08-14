// import React from 'react'
import '../css/Work.css'

function Work(props) {
    return (
        <div className='sectionContainer' style={props.style}>
            <div className='sectionTitle' style={{ width: '255px' }}>Professional Experience</div>
            <div className='sectionText'>Airfind</div>
            <div className='sectionSubtext'>Quality Assurance Engineer</div>
            <div className='sectionSubtext'><strong>September 2021 - August 2022</strong></div>
            <ul className='workSummary'>
                <li>Collaborated directly alongside offshore development team,
                    ensuring a <span>standard of quality</span> and polish in the product.</li>
                <li>Created a suite of automatic tests using Postman which <span>provided
                    instant feedback</span> and bug reporting after each deployment.</li>
                <li>Engaged in weekly bug hunts which helped to actively <span>seek out
                    potential issues</span> and fix them before they became problems.</li>
            </ul>

            <div className='sectionText'>Ideagen</div>
            <div className='sectionSubtext'>Quality Assurance Engineer</div>
            <div className='sectionSubtext'><strong>September 2022 - March 2023</strong></div>
            <ul className='workSummary'>
                <li>Established a new test infrastructure based on old, broken tests
                    and new ones I wrote, <span>providing coverage</span> to all aspects of the
                    product.</li>
                <li>Implemented testing tasks into the preexisting workflow,
                    ensuring <span>quality is a priority</span> moving forwards</li>
            </ul>

            <div className='sectionTitle' style={{ marginTop: '50px', width: '175px' }}>
                Certifications
            </div>
            <div className='sectionText'>CompTIA A+</div>
            <a
                className='sectionSubtext'
                href='https://drive.google.com/file/d/14gXlEM-R71Q-qzi-ZTi-k_GkOap-5skG/view?usp=sharing'
                target="_blank"
                rel="noreferrer">
                    Verification ↗
            </a>
            <div className='sectionSubtext'><strong>June 2023</strong></div>
            <div style={{ height: '10px', width: '100%' }} >&nbsp;</div>
        </div>
    )
}

export default Work
