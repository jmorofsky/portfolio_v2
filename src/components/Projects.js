import React from 'react'
import '../css/Projects.css'

class Projects extends React.Component {
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
                    <div className='sectionTitle' style={{ width: '157px' }}>My Portfolio</div>

                    <div className='sectionText'>Trump Truth Tracker</div>
                    <div className='sectionSubtext' id='projects'>
                        <a href='https://github.com/jmorofsky/TrumpTruthTracker' target='_blank' rel='noreferrer'>
                            https://github.com/jmorofsky/TrumpTruthTracker
                        </a>
                    </div>
                    <div className='sectionSubtext'><strong>April 2025</strong></div>
                    <div className='projectSummary'>Automatically receive an email whenever <span>@realDonaldTrump</span> posts a 
                        new status on Truth Social.
                    </div>

                    <div className='sectionText'>Complete.ly</div>
                    <div className='sectionSubtext' id='projects'>
                        <a href='https://github.com/jmorofsky/complete.ly' target="_blank" rel="noreferrer">
                            https://github.com/jmorofsky/complete.ly ↗
                        </a>
                    </div>
                    <div className='sectionSubtext'><strong>September 2023</strong></div>
                    <div className='projectSummary'>Complete.ly is a <span>task management web application. </span>
                        It allows you to track your tasks for the day, enabling you to stay organized and aware of
                        all the work items you need to get done.
                    </div>

                    <div className='sectionText'>jasonmorofsky.com v2</div>
                    <div className='sectionSubtext' id='projects'>https://jasonmorofsky.com</div>
                    <div className='sectionSubtext' id='projects'>
                        <a href='https://github.com/jmorofsky/portfolio_v2' target="_blank" rel="noreferrer">
                            https://github.com/jmorofsky/portfolio_v2 ↗
                        </a>
                    </div>
                    <div className='sectionSubtext' id='projects'>
                        <a href='https://docs.github.com/en/rest' target="_blank"
                            rel="noreferrer"
                        >
                            https://docs.github.com/en/rest ↗
                        </a>
                    </div>
                    <div className='sectionSubtext'><strong>Spring 2023</strong></div>
                    <div className='projectSummary'>This website - my <span>interactive portfolio. </span></div>
                    <div className='projectSummary'>
                        GitHub's API provides <span>statistics</span> about my profile, which are
                        updated automatically every day.
                    </div>
                    <div className='projectSummary'>
                        A basic form of BASH called <span>JMSH</span> lives
                        inside the "OS" of the site, which itself is called <span>jmL</span> (short for jm-Linux).
                    </div>

                    <div className='sectionText'>Hangman</div>
                    <div className='sectionSubtext' id='projects'>
                        <a href='https://github.com/jmorofsky/hangman' target="_blank" rel="noreferrer">
                            https://github.com/jmorofsky/hangman ↗
                        </a>
                    </div>
                    <div className='sectionSubtext' id='projects'>
                        <a href='https://random-word-api.herokuapp.com' target="_blank" rel="noreferrer">
                            https://random-word-api.herokuapp.com ↗
                        </a>
                    </div>
                    <div className='sectionSubtext'><strong>February 2023</strong></div>
                    <div className='projectSummary'>
                        Hangman is a <span>web application game</span> created using React. It uses a
                        <span> random word API</span> to select any word in the English language for each round.
                    </div>

                    <div className='sectionText'>Medicare with Meghan Morofsky</div>
                    <div className='sectionSubtext' id='projects'>
                        <a href='https://meghanexplainsmedicare.com' target="_blank" rel="noreferrer">
                            https://meghanexplainsmedicare.com ↗
                        </a>
                    </div>
                    <div className='sectionSubtext' id='projects'>
                        <a href='https://github.com/jmorofsky/medicare-info' target="_blank" rel="noreferrer">
                            https://github.com/jmorofsky/medicare-info ↗
                        </a>
                    </div>
                    <div className='sectionSubtext'><strong>August 2021</strong></div>
                    <div className='projectSummary'>An <span>informational website</span> created to help
                        potential customers learn about Medicare, how Meghan can help them, and how to contact her.</div>

                    <div className='sectionText'>jasonmorofsky.com v1</div>
                    <div className='sectionSubtext' id='projects'>
                        <a href='https://github.com/jmorofsky/my-portfolio' target="_blank" rel="noreferrer">
                            https://github.com/jmorofsky/my-portfolio ↗
                        </a>
                    </div>
                    <div className='sectionSubtext'><strong>Summer 2021</strong></div>
                    <div className='projectSummary'>My original <span>portfolio.</span> It is the first web project
                        I ever made, and how I learned to design, develop, and deploy a website.
                    </div>

                    <div style={{ height: '10px', width: '100%' }} >&nbsp;</div>
                </div>

                {this.state.scrollable && <div className='scroll-arrow'>⇣</div>}
            </div >
        )
    }
}

export default Projects
