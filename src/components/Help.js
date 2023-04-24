import React from 'react'
import '../css/Help.css'

function Help(props) {
    return (
        <div className={props.help}>
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
    )
}

export default Help
