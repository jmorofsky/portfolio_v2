import React from 'react'
import '../css/Nav.css'

class Nav extends React.Component {
    render() {
        return (
            <div className='nav'>
                <div className={this.props.style[0]} onClick={() => this.props.setSection(3)}>
                    <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>About</strong>
                </div>
                <div className={this.props.style[1]} onClick={() => this.props.setSection(4)}>
                    <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Work</strong>
                </div>
                <div className={this.props.style[2]} onClick={() => this.props.setSection(5)}>
                    <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Projects</strong>
                </div>
                <div className={this.props.style[3]} onClick={() => this.props.setSection(6)}>
                    <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Contact</strong>
                </div>
            </div>
        )
    }
}

export default Nav
