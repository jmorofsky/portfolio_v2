import React from 'react'
import './css/App.css'
import Loadscreen from './components/Loadscreen'
import Entry from './components/Entry'
import Stars from './components/Stars'
import Title from './components/Title'
import Summary from './components/Summary'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import JML from './components/JML'
import Nav from './components/Nav'
import logo from './images/logo.png'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      section: 1,
      style: ['navItem', 'navItem', 'navItem', 'navItem'],
      stats: []
    }

    this.setSection = this.setSection.bind(this)
  }

  componentDidMount() {
    fetch("https://www.googleapis.com/storage/v1/b/jasonmorofsky/o/statsData.json")
      .then(res => res.json())
      .then(
        (result) => {
          let url = result.mediaLink
          fetch(url)
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  stats: result.stats
                })
              }
            )
        }
      )
  }

  setSection(props) {
    let temp = ['navItem', 'navItem', 'navItem', 'navItem']
    if (props > 2) {
      temp[props - 3] = 'navItemActive'
    }

    if (this.state.section !== props) {
      if (props > 2 || this.state.section > 2) {
        this.setState({ section: 8 })
        setTimeout(() => { this.setState({ section: props }) }, 1000)
      } else {
        this.setState({ section: props })
      }
    }

    this.setState({ style: temp })
  }

  render() {
    switch (this.state.section) {
      case 0:
        setTimeout(() => { this.setSection(1) }, 12000)
        return (
          <div className='background'>
            <div className='outline'>
              <Loadscreen />
            </div>
          </div>
        )

      case 1:
        setTimeout(() => { this.setSection(2) }, 4000)
        return (
          <div className='background'>
            <div className='outline'>
              <Entry />
            </div>
          </div>
        )

      case 2:
        return (
          <div className='background'>
            <div className='outline'>
              <img src={logo} className='logo' onClick={() => this.setSection(2)} alt='' />
              <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
                <div style={{ animation: 'fadeIn 1s forwards' }}>
                  <Stars />
                  <div className='extraStars' >
                    <Stars />
                  </div>
                  <Title />
                  <Nav style={this.state.style} val='0' setSection={this.setSection} />

                  <Summary />
                  <JML section={this.state.section} />
                  <About stats={this.state.stats} style={{ opacity: 0 }} />
                  <Work style={{ opacity: 0 }} />
                  <Projects style={{ opacity: 0 }} />
                  <Contact style={{ opacity: 0 }} />
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className='background'>
            <div className='outline'>
              <img src={logo} className='logo' onClick={() => this.setSection(2)} alt='' />
              <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
                <div style={{ animation: 'fadeIn 1s forwards' }}>
                  <Stars />
                  <div className='extraStars' >
                    <Stars />
                  </div>
                  <Title />
                  <Nav style={this.state.style} val='1' setSection={this.setSection} />

                  <Summary style={{ opacity: 0 }} />
                  <JML section={this.state.section} />
                  <About stats={this.state.stats} />
                  <Work style={{ opacity: 0 }} />
                  <Projects style={{ opacity: 0 }} />
                  <Contact style={{ opacity: 0 }} />
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className='background'>
            <div className='outline'>
              <img src={logo} className='logo' onClick={() => this.setSection(2)} alt='' />
              <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
                <div style={{ animation: 'fadeIn 1s forwards' }}>
                  <Stars />
                  <div className='extraStars' >
                    <Stars />
                  </div>
                  <Title />
                  <Nav style={this.state.style} val='2' setSection={this.setSection} />

                  <Summary style={{ opacity: 0 }} />
                  <JML section={this.state.section} />
                  <About stats={this.state.stats} style={{ opacity: 0 }} />
                  <Work />
                  <Projects style={{ opacity: 0 }} />
                  <Contact style={{ opacity: 0 }} />
                </div>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className='background'>
            <div className='outline'>
              <img src={logo} className='logo' onClick={() => this.setSection(2)} alt='' />
              <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
                <div style={{ animation: 'fadeIn 1s forwards' }}>
                  <Stars />
                  <div className='extraStars' >
                    <Stars />
                  </div>
                  <Title />
                  <Nav style={this.state.style} val='3' setSection={this.setSection} />

                  <Summary style={{ opacity: 0 }} />
                  <JML section={this.state.section} />
                  <About stats={this.state.stats} style={{ opacity: 0 }} />
                  <Work style={{ opacity: 0 }} />
                  <Projects />
                  <Contact style={{ opacity: 0 }} />
                </div>
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className='background'>
            <div className='outline'>
              <img src={logo} className='logo' onClick={() => this.setSection(2)} alt='' />
              <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
                <div style={{ animation: 'fadeIn 1s forwards' }}>
                  <Stars />
                  <div className='extraStars' >
                    <Stars />
                  </div>
                  <Title />
                  <Nav style={this.state.style} val='4' setSection={this.setSection} />

                  <Summary style={{ opacity: 0 }} />
                  <JML section={this.state.section} />
                  <About stats={this.state.stats} style={{ opacity: 0 }} />
                  <Work style={{ opacity: 0 }} />
                  <Projects style={{ opacity: 0 }} />
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className='background'>
            <div className='outline'>
              <img src={logo} className='logo' onClick={() => this.setSection(2)} alt='' />
              <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
                <div style={{ animation: 'fadeIn 1s forwards' }}>
                  <Stars />
                  <div className='extraStars' >
                    <Stars />
                  </div>
                  <Title />
                  <Nav style={this.state.style} val='0' setSection={this.setSection} />

                  <Summary style={{ opacity: 0 }} />
                  <JML section={this.state.section} />
                  <About stats={this.state.stats} style={{ opacity: 0 }} />
                  <Work style={{ opacity: 0 }} />
                  <Projects style={{ opacity: 0 }} />
                  <Contact style={{ opacity: 0 }} />
                </div>
              </div>
            </div>
          </div>
        )
    }
  }
}

export default App

/*
  distortion / glitch animation
  finish jmsh commands
  add responsiveness
*/
