import React from 'react'
import './css/App.css'
import Loadscreen from './components/Loadscreen'
import Entry from './components/Entry'
import Stars from './components/Stars'
import logo from './images/logo.png'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      section: 2,
      style: ['navItem', 'navItem', 'navItem', 'navItem'],
      input: '',
      output1: 'JM-Linux 1.0 LTS',
      output2: 'Type <help> to get started',
      help: 'helpInactive'
    }

    this.setSection = this.setSection.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  setSection(props) {
    this.setState({ section: props })

    let temp = ['navItem', 'navItem', 'navItem', 'navItem']
    if (props > 2) {
      temp[props - 3] = 'navItemActive'
    }
    this.setState({ style: temp })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({ help: 'helpInactive' })
    let temp = this.state.output2
    if (this.state.input === 'help') {
      this.setState({ output1: temp, output2: this.state.input, help: 'helpActive' })
    } else if (this.state.input === 'hello') {
      this.setState({ output1: temp, output2: 'Hello, world!' })
    } else if (this.state.input.includes('echo ')) {
      let sub = this.state.input.substring(5)
      this.setState({ output1: temp, output2: sub })
    } else if (this.state.input === 'pwd') {
      switch (this.state.section) {
        case 3:
          this.setState({ output1: temp, output2: '/home/user/about' })
          break
        case 4:
          this.setState({ output1: temp, output2: '/home/user/work' })
          break
        case 5:
          this.setState({ output1: temp, output2: '/home/user/projects' })
          break
        case 6:
          this.setState({ output1: temp, output2: '/home/user/contact' })
          break
        default:
          this.setState({ output1: temp, output2: '/home/user' })
      }
    } else {
      let error = this.state.input + ': command not recognized'
      this.setState({ output1: temp, output2: error })
    }

    this.setState({ input: '' })
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
              <img src={logo} className='logo' onClick={() => this.setSection(2)} />
              <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
                <div style={{ animation: 'fadeIn 1s forwards' }}>
                  <Stars />
                  <div className='extraStars' >
                    <Stars />
                  </div>
                  <div className='title'>
                    <div className='r'>Jason Morofsky</div>
                    <div className='g'>Jason Morofsky</div>
                    <div className='b'>Jason Morofsky</div>
                  </div>
                  <div className='subtitle'>Web Development, QA, IT</div>

                  <div className='nav'>
                    <div className={this.state.style[0]} onClick={() => this.setSection(3)}>
                      <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>About</strong>
                    </div>
                    <div className={this.state.style[1]} onClick={() => this.setSection(4)}>
                      <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Work</strong>
                    </div>
                    <div className={this.state.style[2]} onClick={() => this.setSection(5)}>
                      <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Projects</strong>
                    </div>
                    <div className={this.state.style[3]} onClick={() => this.setSection(6)}>
                      <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Contact</strong>
                    </div>
                  </div>

                  <div className='summary'><strong>Born in 1999 in South Florida. Since I was a child, I
                    have loved computers and technology. I express myself through the web.
                    It is possible to create beauty and efficency using the internet. I also love IT and
                    its problem-solving nature.</strong>
                  </div>

                  <div className={this.state.help}>
                    <p style={{ fontSize: '22px', margin: 0 }}>Help</p>
                    <p style={{ margin: '10px 0' }}>JMSH is like BASH, except limited.</p>
                    <ul>
                      <li>Type&nbsp;<span>ls</span>&nbsp;to list directory contents</li>
                      <li>Type&nbsp;<span>cd</span>&nbsp;to change directory</li>
                      <li>Type&nbsp;<span>pwd</span>&nbsp;to print name of current directory</li>
                    </ul>

                    <p style={{ margin: 0, fontSize: '18px' }}>All commands</p>
                    <p style={{ margin: '5px 0' }}>JMSH, verson 0.1.1</p>
                    <ul className='allCommands' style={{ padding: 0 }}>
                      <li><span>ls</span> - list directory contents</li>
                      <li><span>cd</span> - change directory</li>
                      <li><span>echo</span> - display a line of text</li>
                      <li><span>pwd</span> - print name of current directory</li>
                      <li><span>mkdir</span> - make new directory</li>
                      <li><span>touch</span> - create new file</li>
                      <li><span>hello</span> - friendly greeting program</li>
                    </ul>
                  </div>

                  <section className='jmLinuxContainer'>
                    <div><strong>{this.state.output1}</strong></div>
                    <div><strong>{this.state.output2}</strong></div>
                    <div style={{ color: 'rgb(252, 244, 165)' }}>
                      <strong>user: -$&nbsp;</strong>
                      <form style={{ display: 'inline' }} onSubmit={this.handleSubmit}>
                        <input type={'text'}
                          className='input'
                          autoFocus={true}
                          onBlur={({ target }) => target.focus()}
                          spellCheck='false'
                          maxLength={21}
                          onChange={(e) => this.setState({ input: e.target.value })}
                          value={this.state.input}
                        />
                        <input type='submit' style={{ display: 'none' }} />
                      </form>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className='background'>
            <div className='outline'>
              <div style={{ animation: 'fadeIn 1s forwards' }}>
                <div className='title'>Jason Morofsky</div>
                <div className='subtitle'>Web Development, QA, IT</div>
                <img src={logo} className='logo' onClick={() => this.setSection(2)} />

                <div className='nav'>
                  <div className={this.state.style[0]} onClick={() => this.setSection(3)}>
                    <strong><span className='selector' style={{ opacity: '1' }}>{'>'}</span>About</strong>
                  </div>
                  <div className={this.state.style[1]} onClick={() => this.setSection(4)}>
                    <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Work</strong>
                  </div>
                  <div className={this.state.style[2]} onClick={() => this.setSection(5)}>
                    <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Projects</strong>
                  </div>
                  <div className={this.state.style[3]} onClick={() => this.setSection(6)}>
                    <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Contact</strong>
                  </div>
                </div>

                <div className='summary' style={{ opacity: '0' }}><strong>Born in 1999 in South Florida. Since I
                  was a child, I have loved computers and technology. I express myself through the web.
                  It is possible to create beauty and efficency using the internet. I also love IT and
                  its problem-solving nature.</strong>
                </div>

                <div className='educationContainer'>
                  <div className='educationTitle'>Education History</div>
                  <div className='educationText'>FLORIDA POLYTECHNIC UNIVERSITY</div>
                  <div className='educationSubtext'>Bachelor of Science, Computer Science</div>
                  <div className='educationSubtext'><strong>2021</strong></div>
                </div>
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
              contact has contact info and socials 
              distortion / glitch animation*/
