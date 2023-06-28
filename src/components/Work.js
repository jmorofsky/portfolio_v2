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
                <li>Created detailed, comprehensive, and well-structured <span>test cases.</span></li>
                <li>Collaborated with offshore <span>development team</span> to ensure a quality release
                    each sprint.</li>
                <li>Utilizing Postman, developed <span>automated</span> API test cases.</li>
                <li>Tested changes on development, staging, and production <span>environments.</span>
                </li>
                <li>Actively participated in daily stand-up <span>meetings,</span> project planning,
                    sprint planning, grooming sessions, and retrospectives.</li>
                <li>Worked with <span>databases</span> such as MongoDB and Google BigQuery.</li>
            </ul>

            <div className='sectionText'>Ideagen</div>
            <div className='sectionSubtext'>Quality Assurance Engineer</div>
            <div className='sectionSubtext'><strong>September 2022 - January 2023</strong></div>
            <ul className='workSummary'>
                <li><span>Analyzed</span> the existing test infrastructure.</li>
                <li>Worked with developers to <span>fix</span> existing nonfunctional tests and adjust
                    their scope where necessary.</li>
                <li>Created <span>document</span> detailing test status and coverage for the entire
                    product.</li>
                <li>Developed a <span>plan</span> to implement new tests for areas of the product still
                    needing coverage.</li>
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
