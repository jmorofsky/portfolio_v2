import React from 'react'
import '../css/Nav.css'

class Nav extends React.Component {
    render() {
        switch (this.props.val) {
            case '0':
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
            case '1':
                return (
                    <div className='nav'>
                        <div className={this.props.style[0]} onClick={() => this.props.setSection(3)}>
                            <strong><span className='selector' style={{ opacity: '1' }}>{'>'}</span>About</strong>
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
            case '2':
                return (
                    <div className='nav'>
                        <div className={this.props.style[0]} onClick={() => this.props.setSection(3)}>
                            <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>About</strong>
                        </div>
                        <div className={this.props.style[1]} onClick={() => this.props.setSection(4)}>
                            <strong><span className='selector' style={{ opacity: '1' }}>{'>'}</span>Work</strong>
                        </div>
                        <div className={this.props.style[2]} onClick={() => this.props.setSection(5)}>
                            <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Projects</strong>
                        </div>
                        <div className={this.props.style[3]} onClick={() => this.props.setSection(6)}>
                            <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Contact</strong>
                        </div>
                    </div>
                )
            case '3':
                return (
                    <div className='nav'>
                        <div className={this.props.style[0]} onClick={() => this.props.setSection(3)}>
                            <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>About</strong>
                        </div>
                        <div className={this.props.style[1]} onClick={() => this.props.setSection(4)}>
                            <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Work</strong>
                        </div>
                        <div className={this.props.style[2]} onClick={() => this.props.setSection(5)}>
                            <strong><span className='selector' style={{ opacity: '1' }}>{'>'}</span>Projects</strong>
                        </div>
                        <div className={this.props.style[3]} onClick={() => this.props.setSection(6)}>
                            <strong><span className='selector' style={{ opacity: '0' }}>{'>'}</span>Contact</strong>
                        </div>
                    </div>
                )
            default:
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
                            <strong><span className='selector' style={{ opacity: '1' }}>{'>'}</span>Contact</strong>
                        </div>
                    </div>
                )
        }
    }
}

export default Nav
