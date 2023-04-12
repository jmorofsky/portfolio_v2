import React from 'react'
import './css/App.css'
import Loadscreen from './components/Loadscreen'
import Entry from './components/Entry'
import logo from './images/logo.png'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { section: 3 }

    this.setSection = this.setSection.bind(this)
  }

  setSection(props) {
    this.setState({ section: props })
  }

  render() {
    switch (this.state.section) {
      case 0:
        setTimeout(() => { this.setSection(1) }, 12000)
        return (
          <div className='background'>
            <Loadscreen />
          </div>
        )

      case 1:
        setTimeout(() => { this.setSection(2) }, 4000)
        return (
          <div className='background'>
            <Entry />
          </div>
        )

      case 2:
        return (
          <div className='background'>
            <div className='outline'>
              <div className='title'>Jason Morofsky</div>
              <div className='subtitle'>Web Development, QA, IT</div>
              <img src={logo} className='logo' onClick={() => this.setSection(2)} />

              <div className='nav'>
                <div className='navItem' onClick={() => this.setSection(3)}>
                  <strong>About</strong>
                </div>
                <div className='navItem' onClick={() => this.setSection(4)}>
                  <strong>Work</strong>
                </div>
                <div className='navItem' onClick={() => this.setSection(5)}>
                  <strong>Projects</strong>
                </div>
                <div className='navItem' onClick={() => this.setSection(6)}>
                  <strong>Contact</strong>
                </div>
              </div>

              <div className='summary'><strong>Born in 1999 in South Florida. Since I was a child, I
                have loved computers and technology. I express myself using the web.
                It is possible to create beauty and efficency through the net. I also love IT and its
                problem-solving nature.</strong>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className='background'>
            <div className='outline'>
              <div className='title'>Jason Morofsky</div>
              <div className='subtitle'>Web Development, QA, IT</div>
              <img src={logo} className='logo' onClick={() => this.setSection(2)} />

              <div className='nav'>
                <div className='navItemSelected' ><strong>•</strong></div>
                <div className='navItem' onClick={() => this.setSection(4)}>
                  <strong>Work</strong>
                </div>
                <div className='navItem' onClick={() => this.setSection(5)}>
                  <strong>Projects</strong>
                </div>
                <div className='navItem' onClick={() => this.setSection(6)}>
                  <strong>Contact</strong>
                </div>
              </div>

              <div className='summary'><strong>Born in 1999 in South Florida. Since I was a child, I
                have loved computers and technology. I express myself using the web.
                It is possible to create beauty and efficency through the net. I also love IT and its
                problem-solving nature.</strong>
              </div>
            </div>
          </div>
        )
    }
  }
}

export default App

/* homepage has short summary
              about has education, skills, tools
              work has work experience
              projects has list of projects and stats
              contact has contact info and socials */
