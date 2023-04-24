import React from 'react'
import '../css/About.css'

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='sectionContainer' style={this.props.style}>
                <div className='sectionTitle'>Education History</div>
                <div className='sectionText'>Florida Polytechnic University</div>
                <div className='sectionSubtext'>Bachelor of Science, Computer Science</div>
                <div className='sectionSubtext'><strong>2021</strong></div>

                <div className='sectionText'>Coral Glades High School</div>
                <div className='sectionSubtext'>Coral Springs, FL</div>
                <div className='sectionSubtext'><strong>2017</strong></div>

                <div className='sectionTitle' style={{ marginTop: '100px' }}>Skills</div>
                <div className='skillOutline'>
                    <div className='skillBar' style={{ width: '90%' }} />
                </div>
                <div className='skillSubtext'>Frontend</div>
                <div className='skillOutline'>
                    <div className='skillBar' style={{ width: '90%' }} />
                </div>
                <div className='skillSubtext'>Quality Assurance</div>
                <div className='skillOutline'>
                    <div className='skillBar' style={{ width: '80%' }} />
                </div>
                <div className='skillSubtext'>Agile Development</div>
                <div className='skillOutline'>
                    <div className='skillBar' style={{ width: '80%' }} />
                </div>
                <div className='skillSubtext'>Information Technology</div>
                <div className='skillOutline'>
                    <div className='skillBar' style={{ width: '70%' }} />
                </div>
                <div className='skillSubtext'>React</div>
                <div className='skillOutline'>
                    <div className='skillBar' style={{ width: '60%' }} />
                </div>
                <div className='skillSubtext'>Backend</div>

                <div className='sectionTitle' style={{ marginTop: '100px' }}>Some GitHub Stats</div>
                <div className='statsContainer'>
                    <div>
                        <div className='statsValue'>{this.props.stats[0].value}</div>
                        Projects</div>
                    <div>
                        <div className='statsValue'>{this.props.stats[5].value}</div>
                        Languages Used</div>
                    <div>
                        <div className='statsValue'>{this.props.stats[1].value}</div>
                        Commits</div>
                    <div>
                        <div className='statsValue'>{this.props.stats[2].value}</div>
                        Deletions</div>
                    <div>
                        <div className='statsValue'>{this.props.stats[3].value}</div>
                        Additions</div>
                    <div>
                        <div className='statsValue'>{this.props.stats[4].value}</div>
                        KB of Code</div>
                </div>
                <div style={{ width: '330px', margin: '15px 50px 0 0', fontWeight: 1 }}>These stats are
                    updated automatically every day. Last update:&nbsp;{this.props.stats[8].value}.
                </div>
            </div>
        )
    }
}

export default About
