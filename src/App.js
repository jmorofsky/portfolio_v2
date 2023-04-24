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
import Help from './components/Help'
import About from './components/About'
import logo from './images/logo.png'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      section: 1,
      style: ['navItem', 'navItem', 'navItem', 'navItem'],
      input: '',
      output1: 'JM-Linux 1.0 LTS',
      output2: 'Type <help> to get started',
      help: 'helpInactive',
      stats: []
    }

    this.setSection = this.setSection.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

    if (this.state.section != props) {
      if (props > 2 || this.state.section > 2) {
        this.setState({ section: 8 })
        setTimeout(() => { this.setState({ section: props }) }, 1000)
      } else {
        this.setState({ section: props })
      }
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

                  <Title />

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

                  <Summary />

                  <Help help={this.state.help} />

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
              <img src={logo} className='logo' onClick={() => this.setSection(2)} />
              <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
                <div style={{ animation: 'fadeIn 1s forwards' }}>
                  <Stars />
                  <div className='extraStars' >
                    <Stars />
                  </div>

                  <Title />

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

                  <Summary style={{ opacity: 0 }} />

                  <Help help={this.state.help} />

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
              <img src={logo} className='logo' onClick={() => this.setSection(2)} />
              <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
                <div style={{ animation: 'fadeIn 1s forwards' }}>
                  <Stars />
                  <div className='extraStars' >
                    <Stars />
                  </div>

                  <Title />

                  <div className='nav'>
                    <div className={this.state.style[0]} onClick={() => this.setSection(3)}>
                      <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>About</strong>
                    </div>
                    <div className={this.state.style[1]} onClick={() => this.setSection(4)}>
                      <strong><span className='selector' style={{ opacity: '1' }}>{'>'}</span>Work</strong>
                    </div>
                    <div className={this.state.style[2]} onClick={() => this.setSection(5)}>
                      <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Projects</strong>
                    </div>
                    <div className={this.state.style[3]} onClick={() => this.setSection(6)}>
                      <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Contact</strong>
                    </div>
                  </div>

                  <Summary style={{ opacity: 0 }} />

                  <Help help={this.state.help} />

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
              <img src={logo} className='logo' onClick={() => this.setSection(2)} />
              <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
                <div style={{ animation: 'fadeIn 1s forwards' }}>
                  <Stars />
                  <div className='extraStars' >
                    <Stars />
                  </div>

                  <Title />

                  <div className='nav'>
                    <div className={this.state.style[0]} onClick={() => this.setSection(3)}>
                      <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>About</strong>
                    </div>
                    <div className={this.state.style[1]} onClick={() => this.setSection(4)}>
                      <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Work</strong>
                    </div>
                    <div className={this.state.style[2]} onClick={() => this.setSection(5)}>
                      <strong><span className='selector' style={{ opacity: '1' }}>{'>'}</span>Projects</strong>
                    </div>
                    <div className={this.state.style[3]} onClick={() => this.setSection(6)}>
                      <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Contact</strong>
                    </div>
                  </div>

                  <Summary style={{ opacity: 0 }} />

                  <Help help={this.state.help} />

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
              <img src={logo} className='logo' onClick={() => this.setSection(2)} />
              <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
                <div style={{ animation: 'fadeIn 1s forwards' }}>
                  <Stars />
                  <div className='extraStars' >
                    <Stars />
                  </div>

                  <Title />

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
                      <strong><span className='selector' style={{ opacity: '1' }}>{'>'}</span>Contact</strong>
                    </div>
                  </div>

                  <Summary style={{ opacity: 0 }} />

                  <Help help={this.state.help} />

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
              <img src={logo} className='logo' onClick={() => this.setSection(2)} />
              <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
                <div style={{ animation: 'fadeIn 1s forwards' }}>
                  <Stars />
                  <div className='extraStars' >
                    <Stars />
                  </div>

                  <Title />

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

                  <Summary style={{ opacity: 0 }} />

                  <Help help={this.state.help} />

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

/*            distortion / glitch animation
              turn sections into components
              get rid of walls of divs
              comments*/
