import React from 'react'
import '../css/About.css'

class About extends React.Component {
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
            <div className='sectionContainer' style={this.props.style} id='about'>
                <div className='overflow-container' onScroll={this.handleScroll}>
                    <div className='sectionTitle'>Education History</div>
                    <div className='sectionText'>Florida Polytechnic University</div>
                    <div className='sectionSubtext' id='nowrap'>Bachelor of Science, Computer Science</div>
                    <div className='sectionSubtext'><strong>2021</strong></div>
                    <ul className='educationSummary'>
                        <li>
                            <span>Coursework</span> including Software Engineering, Database, Object-oriented
                            Programming, Data Structures, and Algorithms
                        </li>
                        <li>
                            Competed as a <span>player and coach</span> in varsity Rainbow Six: Siege esports,
                            culminating in top 8 playoff placing out of 64 teams
                        </li>
                    </ul>

                    <div className='sectionText'>Coral Glades High School</div>
                    <div className='sectionSubtext'>Coral Springs, FL</div>
                    <div className='sectionSubtext'><strong>2017</strong></div>

                    <div className='sectionTitle' style={{ marginTop: '100px' }}>Skills</div>
                    <div className='skillOutline' style={{ marginTop: '35px' }}>
                        <div className='skillBar' style={{ width: '99%' }} />
                    </div>
                    <div className='skillSubtext'>UI Automation</div>
                    <div className='skillOutline'>
                        <div className='skillBar' style={{ width: '95%' }} />
                    </div>
                    <div className='skillSubtext'>Test Case Design</div>
                    <div className='skillOutline'>
                        <div className='skillBar' style={{ width: '87%' }} />
                    </div>
                    <div className='skillSubtext'>API Automation</div>
                    <div className='skillOutline'>
                        <div className='skillBar' style={{ width: '80%' }} />
                    </div>
                    <div className='skillSubtext'>Fullstack Development</div>
                    <div className='skillOutline'>
                        <div className='skillBar' style={{ width: '70%' }} />
                    </div>
                    <div className='skillSubtext'>Performance Testing</div>
                    <div className='skillOutline'>
                        <div className='skillBar' style={{ width: '60%' }} />
                    </div>
                    <div className='skillSubtext'>Agility</div>

                    <div className='sectionTitle' style={{ marginTop: '100px' }}>Some GitHub Stats</div>
                    <div className='statsContainer'>
                        <div>
                            <div className='statsValue'>{this.props.stats[0].value}</div>
                            Projects
                        </div>
                        <div>
                            <div className='statsValue'>{this.props.stats[5].value}</div>
                            Languages Used
                        </div>
                        <div>
                            <div className='statsValue'>{this.props.stats[1].value}</div>
                            Commits
                        </div>
                        <div>
                            <div className='statsValue'>{this.props.stats[2].value}</div>
                            Deletions
                        </div>
                        <div>
                            <div className='statsValue'>{this.props.stats[3].value}</div>
                            Additions
                        </div>
                        <div>
                            <div className='statsValue'>{this.props.stats[4].value}</div>
                            KB of Code
                        </div>
                    </div>
                    <div className='statsSubtext'>These stats are
                        updated automatically every day. Last update:&nbsp;{this.props.stats[8].value}.
                    </div>

                    <div style={{ height: '10px', width: '100%' }} >&nbsp;</div>
                </div>

                {this.state.scrollable && <div className='scroll-arrow'>⇣</div>}
            </div>
        )
    }
}

export default About
