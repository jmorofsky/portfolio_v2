import React from 'react'
import '../css/Projects.css'

function Projects(props) {
    return (
        <div className='sectionContainer' style={props.style}>
            <div className='sectionTitle' style={{ width: '157px' }}>My Portfolio</div>

            <div className='sectionText'>jasonmorofsky.com v2</div>
            <div className='sectionSubtext' id='projects'>https://jasonmorofsky.com</div>
            <div className='sectionSubtext' id='projects'>
                <a href='https://docs.github.com/en/rest?apiVersion=2022-11-28' target="_blank" rel="noreferrer">
                    https://docs.github.com/en/rest ↗
                </a>
            </div>
            <div className='sectionSubtext'><strong>April 2023</strong></div>
            <div className='projectSummary'>This website! My <span>interactive portfolio, </span>
                complete with a basic form of BASH. Created with HTML, CSS, and JavaScript, using React
                with JSX. Hosted through Google Cloud services. Uses GitHub&apos;s API to provide
                statistics, updated daily.
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
            <div className='projectSummary'>The classic hangman game. A <span>web application</span>
                &nbsp;created using React. Utilizes a random word api. Words generated can be any in the
                English language, so they can sometimes be pretty obscure! This hangman game is a
                challenge.
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
            <div className='sectionSubtext'><strong>August 2021</strong></div>
            <div className='projectSummary'>Created a Medicare <span>information website</span> for a
                client using HTML, CSS, and JavaScript alongside React with JSX. I had a meeting with
                the client, established user requirements, and created a product based on those
                requirements.
            </div>

            <div className='sectionText'>jasonmorofsky.com v1</div>
            <div className='sectionSubtext' id='projects'>
                <a href='https://github.com/jmorofsky/my-portfolio' target="_blank" rel="noreferrer">
                    https://github.com/jmorofsky/my-portfolio ↗
                </a>
            </div>
            <div className='sectionSubtext'><strong>Summer 2021</strong></div>
            <div className='projectSummary'>My original <span>portfolio.</span> It is the first web project
                I ever created, and how I learned to design, build, and publish a website.
            </div>

            <div style={{ height: '10px', width: '100%' }} >&nbsp;</div>
        </div>
    )
}

export default Projects
