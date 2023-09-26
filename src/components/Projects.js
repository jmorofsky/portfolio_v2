import React from 'react'
import '../css/Projects.css'

function Projects(props) {
    return (
        <div className='sectionContainer' style={props.style}>
            <div className='overflow-container'>
                <div className='sectionTitle' style={{ width: '157px' }}>My Portfolio</div>
                <div className='projectSummary' id='projects' style={{ marginTop: "20px" }}>
                    For each project, view it's <span>GitHub page</span> for a detailed analysis of the
                    development process as well as pictures of the project in action.
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
                <div className='projectSummary'>
                    Create new tasks, delete or modify existing
                    tasks, add subtasks, sort your tasks into lists or with tags, mark tasks as complete or
                    incomplete, view upcoming tasks for the week, and more. All with <span>Complete.ly!</span>
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
                <div className='sectionSubtext'><strong>April 2023</strong></div>
                <div className='projectSummary'>This website! My <span>interactive portfolio. </span>
                    Here, you can learn more about me, my skillset, completed projects, work experience, and
                    contact information. You can also download a copy of my resume.
                </div>
                <div className='projectSummary'>
                    The styling for my portfolio took inspiration from old <span>CRT monitors.</span> The
                    interface itself is a mix between some modern and some retro elements. Overall, it creates
                    an effect that looks and works great.
                </div>
                <div className='projectSummary'>
                    The site uses GitHub's API to provide <span>statistics</span> about my profile, which are
                    updated automatically every day.
                </div>
                <div className='projectSummary'>
                    Lastly, a very basic form of <span>BASH</span> - entitled <span>JMSH</span> - lives
                    inside the "OS" of the site, which itself is called jmL (short for jm-Linux). Using JMSH,
                    you can navigate the site, echo text, create new files and directories, and more.
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
                <div className='projectSummary'>The classic game of wordplay!</div>
                <div className='projectSummary'>
                    Hangman is a <span>web application game</span> created using React. It utilizes a
                    <span> random word API</span> to select words each round.
                </div>
                <div className='projectSummary'>
                    The words generated can be any in the English language, so
                    they can be pretty obscure ... making this hangman game a challenge!
                </div>

                <div className='sectionText'>Calculator</div>
                <div className='sectionSubtext' id='projects'>
                    <a href='https://github.com/jmorofsky/calculator' target="_blank" rel="noreferrer">
                        https://github.com/jmorofsky/calculator ↗
                    </a>
                </div>
                <div className='sectionSubtext'><strong>January 2023</strong></div>
                <div className='projectSummary'>A simple 4-function calculator&nbsp;
                    <span>web application.</span> Created using React and fully stylized.
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
                    potential customers learn about Medicare, and how my client Meghan can help them.</div>
                <div className='projectSummary'>After <span>meeting</span> with Meghan, we decided what the
                    site <span>needed to contain:</span> an enticing splash screen, reasons why you should
                    trust Meghan with your Medicare plans, information about Medicare parts, and a contact
                    section.
                </div>
                <div className='projectSummary'>
                    The styling needed to be clean and professional. Since most of the people looking into
                    Medicare are older, the site also needed to
                    <span> accommodate an older audience's needs.</span> This meant making text large and
                    clearly legible, and with high contrast. The overall layout of the site was kept simple
                    and minimalistic to help achieve this goal.
                </div>

                <div className='sectionText'>jasonmorofsky.com v1</div>
                <div className='sectionSubtext' id='projects'>
                    <a href='https://github.com/jmorofsky/my-portfolio' target="_blank" rel="noreferrer">
                        https://github.com/jmorofsky/my-portfolio ↗
                    </a>
                </div>
                <div className='sectionSubtext'><strong>Summer 2021</strong></div>
                <div className='projectSummary'>My original <span>portfolio.</span> It is the first web project
                    I ever created, and how I learned to design, develop, and deploy a website.
                </div>

                <div style={{ height: '10px', width: '100%' }} >&nbsp;</div>
            </div>

            <div className='scroll-arrow'>⇣</div>
        </div >
    )
}

export default Projects
