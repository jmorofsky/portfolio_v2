import React from 'react'
import '../css/Work.css'

class Work extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollable: true
        }

        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
        if (bottom) {
            this.setState({ scrollable: false })
        } else {
            this.setState({ scrollable: true })
        }
    }

    render() {
        return (
            <div className='sectionContainer' style={this.props.style}>
                <div className='overflow-container' onScroll={this.handleScroll}>
                    <div className='sectionTitle' style={{ width: '255px' }}>Professional Experience</div>

                    <div className='sectionText'>red violet</div>
                    <div className='sectionSubtext'>Software Engineer</div>
                    <div className='sectionSubtext'><strong>June 2025 - Present</strong></div>
                    <ul className='workSummary'>
                        <li>Built and maintained complex Apache <span>Airflow DAGs</span> for automated data pipeline orchestration</li>
                        <li>Developed <span>React dashboard</span> for real-time workflow monitoring and configuration management</li>
                        <li>Processed <span>millions of records</span> each day according to detailed configuration and
                            <span> billed customers</span> appropriately
                        </li>
                        <li><span>Collaborated across teams</span> with QA, cloud operations, and other verticals to ensure maximum
                            quality, uptime, and functionality
                        </li>
                        <li style={{ listStyleType: "none" }}><br />
                            <span>Full-stack</span> engineer developing a secure, large-scale <span>data processing
                                system</span> handling PII using Python and Airflow backend,
                            React frontend, and MySQL and PostgreSQL databases. AWS used for infrastructure deployment and monitoring.
                        </li>
                    </ul>

                    <div className='sectionSubtext'>Quality Assurance Analyst</div>
                    <div className='sectionSubtext'><strong>May 2024 - June 2025</strong></div>
                    <ul className='workSummary'>
                        <li>Rewrote existing <span>UI automation</span> test suite from the ground up, fixing
                            broken test cases and writing dozens of new ones, massively expanding test coverage and
                            reliability.
                        </li>
                        <li>Developed <span>front-end API wrapper,</span> allowing for much quicker API calls
                            rather than slower UI automation for certain repetitive testing tasks.
                        </li>
                        <li>Worked alongside relevant stakeholders to <span>optimize the smoke testing
                            and regression process</span> to ensure maximum coverage with as little unnecessary
                            testing as possible.
                        </li>
                        <li><span>Created automation</span> for the entire smoke testing and regression
                            checklist, including UI, API, and system tests, saving hours of manual testing time each
                            release.</li>
                        <li>Successfully <span>brought several large projects to production</span> by employing a
                            three-tiered testing approach and creating testing frameworks.
                        </li>

                        <li style={{ listStyleType: "none" }}><br />
                            In this position, I was the sole manual and automation QA engineer for the product
                            <span> idiBATCH,</span> a data processing system which generates millions in revenue each year.
                        </li>
                    </ul>

                    <div className='sectionText'>Airfind</div>
                    <div className='sectionSubtext'>Quality Assurance Analyst</div>
                    <div className='sectionSubtext'><strong>September 2021 - August 2022</strong></div>
                    <ul className='workSummary'>
                        <li>Collaborated with the development team to <span>triage stories</span> and <span>create
                            comprehensive testing plans.</span>
                        </li>
                        <li>Helped create a suite of <span>automated test cases</span> using Postman, greatly increasing
                            testing coverage while reducing manual testing load.
                        </li>
                        <li>Each sprint, executed <span>smoke</span> and <span>regression tests,</span> as well as
                            test cases created for <span>new user stories.</span>
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

                {this.state.scrollable && <div className='scroll-arrow'>⇣</div>}
            </div>
        )
    }
}

export default Work
