import React from 'react'
import '../css/Work.css'

function Work(props) {
    return (
        <div className='sectionContainer' style={props.style}>
            <div className='overflow-container'>
                <div className='sectionTitle' style={{ width: '255px' }}>Professional Experience</div>

                <div className='sectionText'>Ideagen</div>
                <div className='sectionSubtext'>Quality Assurance Engineer</div>
                <div className='sectionSubtext'><strong>September 2022 - March 2023</strong></div>
                <ul className='workSummary'>
                    <li>Established a new test infrastructure by updating 2-3 outdated tests and writing
                        2-3 new ones each week, <span>providing coverage</span> to all aspects of the
                        product.
                    </li>
                    <li>Implemented testing tasks into the preexisting workflow,
                        ensuring <span>quality is a priority</span> moving forwards.
                    </li>

                    <li style={{ listStyleType: "none" }}><br />
                        In this position, I helped test the <span>frontend usability</span> of a Windows-based
                        application. I ensured all components were performing their expected behavior, and
                        that their design was adequate both to perform their intended function as well as fit
                        in seamlessly with the rest of the application.
                    </li>
                </ul>

                <div className='sectionText'>Airfind</div>
                <div className='sectionSubtext'>Quality Assurance Engineer</div>
                <div className='sectionSubtext'><strong>September 2021 - August 2022</strong></div>
                <ul className='workSummary'>
                    <li>Collaborated directly alongside 12-person development team,
                        ensuring a <span>standard of quality</span> and polish in the product.
                    </li>
                    <li>Created a suite of automatic tests using Postman, which <span>provided
                        instant feedback</span> and bug reporting after each deployment, leading to an average
                        reduction in regression of 60% each sprint.
                    </li>
                    <li>Engaged in weekly bug hunts to actively <span>seek out existing
                        issues</span> and document them, decreasing user bug reports by
                        35% per month on average.
                    </li>

                    <li style={{ listStyleType: "none" }}><br />
                        For this position, I worked on Airfind's client dashboard. This was a <span>web portal
                        </span> where clients using our advertising software could manage their ads, see
                        revenue graphs, and contact us for support.
                    </li>
                    <li style={{ listStyleType: "none" }}>
                        I <span>tested</span> new features being added to the web app, frontend usability,
                        responsiveness, design, integrity of data on both the front and back ends, and
                        multiple API endpoints to ensure functionality in all scenarios.
                    </li>
                </ul>

                <div className='sectionTitle' style={{ marginTop: '50px', width: '175px' }}>
                    Certifications
                </div>
                <div className='sectionText'>ISC2 CC</div>
                <a
                    className='sectionSubtext'
                    href='https://drive.google.com/file/d/1jfmA-c6MTHO63ZFA4x5JojRKjbtaiH3y/view?usp=sharing'
                    target="_blank"
                    rel="noreferrer">
                    Verification ↗
                </a>
                <div className='sectionSubtext'><strong>March 2024</strong></div>
                <ul className='workSummary'>
                    <li style={{ listStyleType: 'none' }}>Proves you have the <span>foundational knowledge,
                        skills, and abilities</span> for an entry- or junior-level cybersecurity role.
                    </li>
                </ul>

                <div className='sectionText'>CompTIA A+</div>
                <a
                    className='sectionSubtext'
                    href='https://drive.google.com/file/d/14gXlEM-R71Q-qzi-ZTi-k_GkOap-5skG/view?usp=sharing'
                    target="_blank"
                    rel="noreferrer">
                    Verification ↗
                </a>
                <div className='sectionSubtext'><strong>June 2023</strong></div>
                <ul className='workSummary'>
                    <li style={{ listStyleType: 'none' }}>Ensures understanding of the <span>cutting-edge
                        fundamentals</span> of computer hardware and software, and the steps needed to
                        troubleshoot problems on a wide range of devices.
                    </li>
                </ul>

                <div className='sectionText'>Postman: The Complete Guide</div>
                <a
                    className='sectionSubtext'
                    href='https://drive.google.com/file/d/12vauSrYTOjQdUF71KvZ11Us3kW6YrOrV/view?usp=sharing'
                    target="_blank"
                    rel="noreferrer">
                    Verification ↗
                </a>
                <div className='sectionSubtext'><strong>July 2022</strong></div>
                <ul className='workSummary'>
                    <li style={{ listStyleType: 'none' }}>Provides an <span>overall understanding of 
                        Postman</span> including request types, API tests, variables, authentication, 
                        mock servers, and more.
                    </li>
                </ul>

                <div className='sectionText'>Agile with Atlassian Jira</div>
                <a
                    className='sectionSubtext'
                    href='https://www.coursera.org/account/accomplishments/verify/N9G7U32BW8ZU'
                    target="_blank"
                    rel="noreferrer">
                    Verification ↗
                </a>
                <div className='sectionSubtext'><strong>April 2021</strong></div>
                <ul className='workSummary'>
                    <li style={{ listStyleType: 'none' }}>Proves understanding of the <span>basics of agile 
                    methodologies</span> (scrum and kanban), how to apply agile practices in Jira, 
                    and how to create and manage agile boards in Jira.
                    </li>
                </ul>
            </div>

            <div className='scroll-arrow'>⇣</div>
        </div>
    )
}

export default Work
