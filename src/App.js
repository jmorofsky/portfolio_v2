import React from 'react'
import './css/App.css'
import Loadscreen from './components/Loadscreen'
import Entry from './components/Entry'
import Stars from './components/Stars'
import logo from './images/logo.png'
import Resume from './Resume.pdf'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      section: 5,
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
                    <p style={{ margin: '10px 0' }}>JMSH is just like BASH, except more limited.</p>
                    <ul>
                      <li>Type&nbsp;<span>ls</span>&nbsp;to list directory contents</li>
                      <li>Type&nbsp;<span>cd</span>&nbsp;to change directory</li>
                      <li>Type&nbsp;<span>pwd</span>&nbsp;to print name of current directory</li>
                    </ul>

                    <p style={{ margin: 0 }}>All commands</p>
                    <p style={{ margin: '5px 0' }}>JMSH, version 0.1.1</p>
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

                  <div className='sectionContainer' style={{ opacity: 0 }}>
                    <div className='sectionTitle'>Education History</div>
                    <div className='educationText'>Florida Polytechnic University</div>
                    <div className='sectionSubtext'>Bachelor of Science, Computer Science</div>
                    <div className='sectionSubtext'><strong>2021</strong></div>

                    <div className='educationText'>Coral Glades High School</div>
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
                  </div>

                  <div className='sectionContainer' style={{ opacity: 0 }}>
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
                    <div className='sectionText'>A+</div>
                    <div className='sectionSubtext'>CompTIA</div>
                    <div className='sectionSubtext'><strong>Expected summer 2023</strong></div>
                  </div>

                  <div className='sectionContainer' style={{ opacity: 0 }}>
                    <div className='sectionTitle' style={{ width: '157px' }}>My Portfolio</div>

                    <div className='sectionText'>jasonmorofsky.com v2</div>
                    <div className='sectionSubtext'>https://jasonmorofsky.com</div>
                    <div className='sectionSubtext'><strong>April 2023</strong></div>
                    <div className='projectSummary'>This website! My <span>interactive portfolio, </span>
                      complete with a basic form of BASH. Created with HTML, CSS, and JavaScript, using React
                      with JSX. Hosted through Google Cloud services. Uses GitHub&apos;s API to provide
                      statistics, updated daily.
                    </div>

                    <div className='sectionText'>Hangman</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/hangman' target="_blank">
                        https://github.com/jmorofsky/hangman ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'>
                      <a href='https://random-word-api.herokuapp.com' target="_blank">
                        https://random-word-api.herokuapp.com ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>February 2023</strong></div>
                    <div className='projectSummary'>The classic hangman game. A <span>web application</span>
                      &nbsp;created using React. Utilizes a random word api. Words generated can be any in the
                      English language, so they can sometimes be pretty obscure! This hangman game is a
                      challenge.
                    </div>

                    <div className='sectionText'>Calculator</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/calculator'>
                        https://github.com/jmorofsky/calculator ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>January 2023</strong></div>
                    <div className='projectSummary'>A simple 4-function calculator&nbsp;
                      <span>web application.</span> Created using React and fully stylized.
                    </div>

                    <div className='sectionText'>Medicare with Meghan Morofsky</div>
                    <div className='sectionSubtext'>
                      <a href='https://meghanexplainsmedicare.com' target="_blank">
                        https://meghanexplainsmedicare.com ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>August 2021</strong></div>
                    <div className='projectSummary'>Created a Medicare <span>information website</span> for a
                      client using HTML, CSS, and JavaScript alongside React with JSX. I had a meeting with
                      the client, established user requirements, and created a product based on those
                      requirements.
                    </div>

                    <div className='sectionText'>jasonmorofsky.com v1</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/my-portfolio'>
                        https://github.com/jmorofsky/my-portfolio ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>Summer 2021</strong></div>
                    <div className='projectSummary'>My original <span>portfolio.</span> The first web project
                      I ever created, and how I learned to design, build, and publish a website.
                    </div>
                  </div>

                  <div className='contactContainer' style={{ opacity: 0 }}>
                    <div><strong><a href='http://www.linkedin.com/in/jason-morofsky' target="_blank">
                      LinkedIn ↗</a></strong></div>
                    <div><strong><a href='https://github.com/jmorofsky' target="_blank">
                      GitHub ↗</a></strong></div>
                    <div><strong><a href='mailto:contact@jasonmorofsky.com' title='Email me' target="_blank">
                      contact@jasonmorofsky.com ↗</a></strong></div>
                    <div><strong>
                      <a href={Resume} download='jason_morofsky_resume' title='Download me'>
                        Resume ↓</a></strong></div>
                  </div>
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
                  <div className='title'>
                    <div className='r'>Jason Morofsky</div>
                    <div className='g'>Jason Morofsky</div>
                    <div className='b'>Jason Morofsky</div>
                  </div>
                  <div className='subtitle'>Web Development, QA, IT</div>

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

                  <div className='summary' style={{ opacity: 0 }}><strong>Born in 1999 in South Florida. Since I was a child, I
                    have loved computers and technology. I express myself through the web.
                    It is possible to create beauty and efficency using the internet. I also love IT and
                    its problem-solving nature.</strong>
                  </div>

                  <div className={this.state.help}>
                    <p style={{ fontSize: '22px', margin: 0 }}>Help</p>
                    <p style={{ margin: '10px 0' }}>JMSH is just like BASH, except more limited.</p>
                    <ul>
                      <li>Type&nbsp;<span>ls</span>&nbsp;to list directory contents</li>
                      <li>Type&nbsp;<span>cd</span>&nbsp;to change directory</li>
                      <li>Type&nbsp;<span>pwd</span>&nbsp;to print name of current directory</li>
                    </ul>

                    <p style={{ margin: 0 }}>All commands</p>
                    <p style={{ margin: '5px 0' }}>JMSH, version 0.1.1</p>
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

                  <div className='sectionContainer'>
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
                  </div>

                  <div className='sectionContainer' style={{ opacity: 0 }}>
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
                    <div className='sectionText'>A+</div>
                    <div className='sectionSubtext'>CompTIA</div>
                    <div className='sectionSubtext'><strong>Expected summer 2023</strong></div>
                  </div>

                  <div className='sectionContainer' style={{ opacity: 0 }}>
                    <div className='sectionTitle' style={{ width: '157px' }}>My Portfolio</div>

                    <div className='sectionText'>jasonmorofsky.com v2</div>
                    <div className='sectionSubtext'>https://jasonmorofsky.com</div>
                    <div className='sectionSubtext'><strong>April 2023</strong></div>
                    <div className='projectSummary'>This website! My <span>interactive portfolio, </span>
                      complete with a basic form of BASH. Created with HTML, CSS, and JavaScript, using React
                      with JSX. Hosted through Google Cloud services. Uses GitHub&apos;s API to provide
                      statistics, updated daily.
                    </div>

                    <div className='sectionText'>Hangman</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/hangman' target="_blank">
                        https://github.com/jmorofsky/hangman ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'>
                      <a href='https://random-word-api.herokuapp.com' target="_blank">
                        https://random-word-api.herokuapp.com ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>February 2023</strong></div>
                    <div className='projectSummary'>The classic hangman game. A <span>web application</span>
                      &nbsp;created using React. Utilizes a random word api. Words generated can be any in the
                      English language, so they can sometimes be pretty obscure! This hangman game is a
                      challenge.
                    </div>

                    <div className='sectionText'>Calculator</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/calculator'>
                        https://github.com/jmorofsky/calculator ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>January 2023</strong></div>
                    <div className='projectSummary'>A simple 4-function calculator&nbsp;
                      <span>web application.</span> Created using React and fully stylized.
                    </div>

                    <div className='sectionText'>Medicare with Meghan Morofsky</div>
                    <div className='sectionSubtext'>
                      <a href='https://meghanexplainsmedicare.com' target="_blank">
                        https://meghanexplainsmedicare.com ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>August 2021</strong></div>
                    <div className='projectSummary'>Created a Medicare <span>information website</span> for a
                      client using HTML, CSS, and JavaScript alongside React with JSX. I had a meeting with
                      the client, established user requirements, and created a product based on those
                      requirements.
                    </div>

                    <div className='sectionText'>jasonmorofsky.com v1</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/my-portfolio'>
                        https://github.com/jmorofsky/my-portfolio ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>Summer 2021</strong></div>
                    <div className='projectSummary'>My original <span>portfolio.</span> The first web project
                      I ever created, and how I learned to design, build, and publish a website.
                    </div>
                  </div>

                  <div className='contactContainer' style={{ opacity: 0 }}>
                    <div><strong><a href='http://www.linkedin.com/in/jason-morofsky' target="_blank">
                      LinkedIn ↗</a></strong></div>
                    <div><strong><a href='https://github.com/jmorofsky' target="_blank">
                      GitHub ↗</a></strong></div>
                    <div><strong><a href='mailto:contact@jasonmorofsky.com' title='Email me' target="_blank">
                      contact@jasonmorofsky.com ↗</a></strong></div>
                    <div><strong>
                      <a href={Resume} download='jason_morofsky_resume' title='Download me'>
                        Resume ↓</a></strong></div>
                  </div>
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
                      <strong><span className='selector' style={{ opacity: '1' }}>{'>'}</span>Work</strong>
                    </div>
                    <div className={this.state.style[2]} onClick={() => this.setSection(5)}>
                      <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Projects</strong>
                    </div>
                    <div className={this.state.style[3]} onClick={() => this.setSection(6)}>
                      <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Contact</strong>
                    </div>
                  </div>

                  <div className='summary' style={{ opacity: 0 }}><strong>Born in 1999 in South Florida. Since I was a child, I
                    have loved computers and technology. I express myself through the web.
                    It is possible to create beauty and efficency using the internet. I also love IT and
                    its problem-solving nature.</strong>
                  </div>

                  <div className={this.state.help}>
                    <p style={{ fontSize: '22px', margin: 0 }}>Help</p>
                    <p style={{ margin: '10px 0' }}>JMSH is just like BASH, except more limited.</p>
                    <ul>
                      <li>Type&nbsp;<span>ls</span>&nbsp;to list directory contents</li>
                      <li>Type&nbsp;<span>cd</span>&nbsp;to change directory</li>
                      <li>Type&nbsp;<span>pwd</span>&nbsp;to print name of current directory</li>
                    </ul>

                    <p style={{ margin: 0 }}>All commands</p>
                    <p style={{ margin: '5px 0' }}>JMSH, version 0.1.1</p>
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

                  <div className='sectionContainer' style={{ opacity: 0 }}>
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
                  </div>

                  <div className='sectionContainer'>
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
                    <div className='sectionText'>A+</div>
                    <div className='sectionSubtext'>CompTIA</div>
                    <div className='sectionSubtext'><strong>Expected summer 2023</strong></div>
                  </div>

                  <div className='sectionContainer' style={{ opacity: 0 }}>
                    <div className='sectionTitle' style={{ width: '157px' }}>My Portfolio</div>

                    <div className='sectionText'>jasonmorofsky.com v2</div>
                    <div className='sectionSubtext'>https://jasonmorofsky.com</div>
                    <div className='sectionSubtext'><strong>April 2023</strong></div>
                    <div className='projectSummary'>This website! My <span>interactive portfolio, </span>
                      complete with a basic form of BASH. Created with HTML, CSS, and JavaScript, using React
                      with JSX. Hosted through Google Cloud services. Uses GitHub&apos;s API to provide
                      statistics, updated daily.
                    </div>

                    <div className='sectionText'>Hangman</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/hangman' target="_blank">
                        https://github.com/jmorofsky/hangman ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'>
                      <a href='https://random-word-api.herokuapp.com' target="_blank">
                        https://random-word-api.herokuapp.com ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>February 2023</strong></div>
                    <div className='projectSummary'>The classic hangman game. A <span>web application</span>
                      &nbsp;created using React. Utilizes a random word api. Words generated can be any in the
                      English language, so they can sometimes be pretty obscure! This hangman game is a
                      challenge.
                    </div>

                    <div className='sectionText'>Calculator</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/calculator'>
                        https://github.com/jmorofsky/calculator ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>January 2023</strong></div>
                    <div className='projectSummary'>A simple 4-function calculator&nbsp;
                      <span>web application.</span> Created using React and fully stylized.
                    </div>

                    <div className='sectionText'>Medicare with Meghan Morofsky</div>
                    <div className='sectionSubtext'>
                      <a href='https://meghanexplainsmedicare.com' target="_blank">
                        https://meghanexplainsmedicare.com ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>August 2021</strong></div>
                    <div className='projectSummary'>Created a Medicare <span>information website</span> for a
                      client using HTML, CSS, and JavaScript alongside React with JSX. I had a meeting with
                      the client, established user requirements, and created a product based on those
                      requirements.
                    </div>

                    <div className='sectionText'>jasonmorofsky.com v1</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/my-portfolio'>
                        https://github.com/jmorofsky/my-portfolio ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>Summer 2021</strong></div>
                    <div className='projectSummary'>My original <span>portfolio.</span> The first web project
                      I ever created, and how I learned to design, build, and publish a website.
                    </div>
                  </div>

                  <div className='contactContainer' style={{ opacity: 0 }}>
                    <div><strong><a href='http://www.linkedin.com/in/jason-morofsky' target="_blank">
                      LinkedIn ↗</a></strong></div>
                    <div><strong><a href='https://github.com/jmorofsky' target="_blank">
                      GitHub ↗</a></strong></div>
                    <div><strong><a href='mailto:contact@jasonmorofsky.com' title='Email me' target="_blank">
                      contact@jasonmorofsky.com ↗</a></strong></div>
                    <div><strong>
                      <a href={Resume} download='jason_morofsky_resume' title='Download me'>
                        Resume ↓</a></strong></div>
                  </div>
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
                      <strong><span className='selector' style={{ opacity: '1' }}>{'>'}</span>Projects</strong>
                    </div>
                    <div className={this.state.style[3]} onClick={() => this.setSection(6)}>
                      <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Contact</strong>
                    </div>
                  </div>

                  <div className='summary' style={{ opacity: 0 }}><strong>Born in 1999 in South Florida. Since I was a child, I
                    have loved computers and technology. I express myself through the web.
                    It is possible to create beauty and efficency using the internet. I also love IT and
                    its problem-solving nature.</strong>
                  </div>

                  <div className={this.state.help}>
                    <p style={{ fontSize: '22px', margin: 0 }}>Help</p>
                    <p style={{ margin: '10px 0' }}>JMSH is just like BASH, except more limited.</p>
                    <ul>
                      <li>Type&nbsp;<span>ls</span>&nbsp;to list directory contents</li>
                      <li>Type&nbsp;<span>cd</span>&nbsp;to change directory</li>
                      <li>Type&nbsp;<span>pwd</span>&nbsp;to print name of current directory</li>
                    </ul>

                    <p style={{ margin: 0 }}>All commands</p>
                    <p style={{ margin: '5px 0' }}>JMSH, version 0.1.1</p>
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

                  <div className='sectionContainer' style={{ opacity: 0 }}>
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
                  </div>

                  <div className='sectionContainer' style={{ opacity: 0 }}>
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
                    <div className='sectionText'>A+</div>
                    <div className='sectionSubtext'>CompTIA</div>
                    <div className='sectionSubtext'><strong>Expected summer 2023</strong></div>
                  </div>

                  <div className='sectionContainer'>
                    <div className='sectionTitle' style={{ width: '157px' }}>My Portfolio</div>

                    <div className='sectionText'>jasonmorofsky.com v2</div>
                    <div className='sectionSubtext'>https://jasonmorofsky.com</div>
                    <div className='sectionSubtext'><strong>April 2023</strong></div>
                    <div className='projectSummary'>This website! My <span>interactive portfolio, </span>
                      complete with a basic form of BASH. Created with HTML, CSS, and JavaScript, using React
                      with JSX. Hosted through Google Cloud services. Uses GitHub&apos;s API to provide
                      statistics, updated daily.
                    </div>

                    <div className='sectionText'>Hangman</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/hangman' target="_blank">
                        https://github.com/jmorofsky/hangman ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'>
                      <a href='https://random-word-api.herokuapp.com' target="_blank">
                        https://random-word-api.herokuapp.com ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>February 2023</strong></div>
                    <div className='projectSummary'>The classic hangman game. A <span>web application</span>
                      &nbsp;created using React. Utilizes a random word api. Words generated can be any in the
                      English language, so they can sometimes be pretty obscure! This hangman game is a
                      challenge.
                    </div>

                    <div className='sectionText'>Calculator</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/calculator'>
                        https://github.com/jmorofsky/calculator ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>January 2023</strong></div>
                    <div className='projectSummary'>A simple 4-function calculator&nbsp;
                      <span>web application.</span> Created using React and fully stylized.
                    </div>

                    <div className='sectionText'>Medicare with Meghan Morofsky</div>
                    <div className='sectionSubtext'>
                      <a href='https://meghanexplainsmedicare.com' target="_blank">
                        https://meghanexplainsmedicare.com ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>August 2021</strong></div>
                    <div className='projectSummary'>Created a Medicare <span>information website</span> for a
                      client using HTML, CSS, and JavaScript alongside React with JSX. I had a meeting with
                      the client, established user requirements, and created a product based on those
                      requirements.
                    </div>

                    <div className='sectionText'>jasonmorofsky.com v1</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/my-portfolio'>
                        https://github.com/jmorofsky/my-portfolio ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>Summer 2021</strong></div>
                    <div className='projectSummary'>My original <span>portfolio.</span> The first web project
                      I ever created, and how I learned to design, build, and publish a website.
                    </div>
                  </div>

                  <div className='contactContainer' style={{ opacity: 0 }}>
                    <div><strong><a href='http://www.linkedin.com/in/jason-morofsky' target="_blank">
                      LinkedIn ↗</a></strong></div>
                    <div><strong><a href='https://github.com/jmorofsky' target="_blank">
                      GitHub ↗</a></strong></div>
                    <div><strong><a href='mailto:contact@jasonmorofsky.com' title='Email me' target="_blank">
                      contact@jasonmorofsky.com ↗</a></strong></div>
                    <div><strong>
                      <a href={Resume} download='jason_morofsky_resume' title='Download me'>
                        Resume ↓</a></strong></div>
                  </div>
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
                      <strong><span className='selector' style={{ opacity: '1' }}>{'>'}</span>Contact</strong>
                    </div>
                  </div>

                  <div className='summary' style={{ opacity: 0 }}><strong>Born in 1999 in South Florida. Since I was a child, I
                    have loved computers and technology. I express myself through the web.
                    It is possible to create beauty and efficency using the internet. I also love IT and
                    its problem-solving nature.</strong>
                  </div>

                  <div className={this.state.help}>
                    <p style={{ fontSize: '22px', margin: 0 }}>Help</p>
                    <p style={{ margin: '10px 0' }}>JMSH is just like BASH, except more limited.</p>
                    <ul>
                      <li>Type&nbsp;<span>ls</span>&nbsp;to list directory contents</li>
                      <li>Type&nbsp;<span>cd</span>&nbsp;to change directory</li>
                      <li>Type&nbsp;<span>pwd</span>&nbsp;to print name of current directory</li>
                    </ul>

                    <p style={{ margin: 0 }}>All commands</p>
                    <p style={{ margin: '5px 0' }}>JMSH, version 0.1.1</p>
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

                  <div className='sectionContainer' style={{ opacity: 0 }}>
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
                  </div>

                  <div className='sectionContainer' style={{ opacity: 0 }}>
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
                    <div className='sectionText'>A+</div>
                    <div className='sectionSubtext'>CompTIA</div>
                    <div className='sectionSubtext'><strong>Expected summer 2023</strong></div>
                  </div>

                  <div className='sectionContainer' style={{ opacity: 0 }}>
                    <div className='sectionTitle' style={{ width: '157px' }}>My Portfolio</div>

                    <div className='sectionText'>jasonmorofsky.com v2</div>
                    <div className='sectionSubtext'>https://jasonmorofsky.com</div>
                    <div className='sectionSubtext'><strong>April 2023</strong></div>
                    <div className='projectSummary'>This website! My <span>interactive portfolio, </span>
                      complete with a basic form of BASH. Created with HTML, CSS, and JavaScript, using React
                      with JSX. Hosted through Google Cloud services. Uses GitHub&apos;s API to provide
                      statistics, updated daily.
                    </div>

                    <div className='sectionText'>Hangman</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/hangman' target="_blank">
                        https://github.com/jmorofsky/hangman ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'>
                      <a href='https://random-word-api.herokuapp.com' target="_blank">
                        https://random-word-api.herokuapp.com ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>February 2023</strong></div>
                    <div className='projectSummary'>The classic hangman game. A <span>web application</span>
                      &nbsp;created using React. Utilizes a random word api. Words generated can be any in the
                      English language, so they can sometimes be pretty obscure! This hangman game is a
                      challenge.
                    </div>

                    <div className='sectionText'>Calculator</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/calculator'>
                        https://github.com/jmorofsky/calculator ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>January 2023</strong></div>
                    <div className='projectSummary'>A simple 4-function calculator&nbsp;
                      <span>web application.</span> Created using React and fully stylized.
                    </div>

                    <div className='sectionText'>Medicare with Meghan Morofsky</div>
                    <div className='sectionSubtext'>
                      <a href='https://meghanexplainsmedicare.com' target="_blank">
                        https://meghanexplainsmedicare.com ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>August 2021</strong></div>
                    <div className='projectSummary'>Created a Medicare <span>information website</span> for a
                      client using HTML, CSS, and JavaScript alongside React with JSX. I had a meeting with
                      the client, established user requirements, and created a product based on those
                      requirements.
                    </div>

                    <div className='sectionText'>jasonmorofsky.com v1</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/my-portfolio'>
                        https://github.com/jmorofsky/my-portfolio ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>Summer 2021</strong></div>
                    <div className='projectSummary'>My original <span>portfolio.</span> The first web project
                      I ever created, and how I learned to design, build, and publish a website.
                    </div>
                  </div>

                  <div className='contactContainer'>
                    <div><strong><a href='http://www.linkedin.com/in/jason-morofsky' target="_blank">
                      LinkedIn ↗</a></strong></div>
                    <div><strong><a href='https://github.com/jmorofsky' target="_blank">
                      GitHub ↗</a></strong></div>
                    <div><strong><a href='mailto:contact@jasonmorofsky.com' title='Email me' target="_blank">
                      contact@jasonmorofsky.com ↗</a></strong></div>
                    <div><strong>
                      <a href={Resume} download='jason_morofsky_resume' title='Download me'>
                        Resume ↓</a></strong></div>
                  </div>
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

                  <div className='summary' style={{ opacity: 0 }}><strong>Born in 1999 in South Florida. Since I was a child, I
                    have loved computers and technology. I express myself through the web.
                    It is possible to create beauty and efficency using the internet. I also love IT and
                    its problem-solving nature.</strong>
                  </div>

                  <div className={this.state.help}>
                    <p style={{ fontSize: '22px', margin: 0 }}>Help</p>
                    <p style={{ margin: '10px 0' }}>JMSH is just like BASH, except more limited.</p>
                    <ul>
                      <li>Type&nbsp;<span>ls</span>&nbsp;to list directory contents</li>
                      <li>Type&nbsp;<span>cd</span>&nbsp;to change directory</li>
                      <li>Type&nbsp;<span>pwd</span>&nbsp;to print name of current directory</li>
                    </ul>

                    <p style={{ margin: 0 }}>All commands</p>
                    <p style={{ margin: '5px 0' }}>JMSH, version 0.1.1</p>
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

                  <div className='sectionContainer' style={{ opacity: 0 }}>
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
                  </div>

                  <div className='sectionContainer' style={{ opacity: 0 }}>
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
                    <div className='sectionText'>A+</div>
                    <div className='sectionSubtext'>CompTIA</div>
                    <div className='sectionSubtext'><strong>Expected summer 2023</strong></div>
                  </div>

                  <div className='sectionContainer' style={{ opacity: 0 }}>
                    <div className='sectionTitle' style={{ width: '157px' }}>My Portfolio</div>

                    <div className='sectionText'>jasonmorofsky.com v2</div>
                    <div className='sectionSubtext'>https://jasonmorofsky.com</div>
                    <div className='sectionSubtext'><strong>April 2023</strong></div>
                    <div className='projectSummary'>This website! My <span>interactive portfolio, </span>
                      complete with a basic form of BASH. Created with HTML, CSS, and JavaScript, using React
                      with JSX. Hosted through Google Cloud services. Uses GitHub&apos;s API to provide
                      statistics, updated daily.
                    </div>

                    <div className='sectionText'>Hangman</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/hangman' target="_blank">
                        https://github.com/jmorofsky/hangman ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'>
                      <a href='https://random-word-api.herokuapp.com' target="_blank">
                        https://random-word-api.herokuapp.com ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>February 2023</strong></div>
                    <div className='projectSummary'>The classic hangman game. A <span>web application</span>
                      &nbsp;created using React. Utilizes a random word api. Words generated can be any in the
                      English language, so they can sometimes be pretty obscure! This hangman game is a
                      challenge.
                    </div>

                    <div className='sectionText'>Calculator</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/calculator'>
                        https://github.com/jmorofsky/calculator ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>January 2023</strong></div>
                    <div className='projectSummary'>A simple 4-function calculator&nbsp;
                      <span>web application.</span> Created using React and fully stylized.
                    </div>

                    <div className='sectionText'>Medicare with Meghan Morofsky</div>
                    <div className='sectionSubtext'>
                      <a href='https://meghanexplainsmedicare.com' target="_blank">
                        https://meghanexplainsmedicare.com ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>August 2021</strong></div>
                    <div className='projectSummary'>Created a Medicare <span>information website</span> for a
                      client using HTML, CSS, and JavaScript alongside React with JSX. I had a meeting with
                      the client, established user requirements, and created a product based on those
                      requirements.
                    </div>

                    <div className='sectionText'>jasonmorofsky.com v1</div>
                    <div className='sectionSubtext'>
                      <a href='https://github.com/jmorofsky/my-portfolio'>
                        https://github.com/jmorofsky/my-portfolio ↗
                      </a>
                    </div>
                    <div className='sectionSubtext'><strong>Summer 2021</strong></div>
                    <div className='projectSummary'>My original <span>portfolio.</span> The first web project
                      I ever created, and how I learned to design, build, and publish a website.
                    </div>
                  </div>

                  <div className='contactContainer' style={{ opacity: 0 }}>
                    <div><strong><a href='http://www.linkedin.com/in/jason-morofsky' target="_blank">
                      LinkedIn ↗</a></strong></div>
                    <div><strong><a href='https://github.com/jmorofsky' target="_blank">
                      GitHub ↗</a></strong></div>
                    <div><strong><a href='mailto:contact@jasonmorofsky.com' title='Email me' target="_blank">
                      contact@jasonmorofsky.com ↗</a></strong></div>
                    <div><strong>
                      <a href={Resume} download='jason_morofsky_resume' title='Download me'>
                        Resume ↓</a></strong></div>
                  </div>
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
              about has education, skills, tools - bar format
              work has work experience and certs
              projects has list of projects and stats
              contact has contact info and socials resume dl
              distortion / glitch animation
              turn sections into components
              get rid of walls of divs
              comments*/
