import React from 'react'
import '../css/JML.css'
import Help from './Help'

class JML extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            output1: 'JM-Linux 1.0 LTS',
            output2: 'Type <help> to get started',
            help: 'helpInactive',
            directories: [
                {
                    name: 'home',
                    path: '/home/user',
                    subdirectories: ['about', 'work', 'projects', 'contact'],
                    active: true
                },
                {
                    name: 'about',
                    path: '/home/user/about',
                    subdirectories: ['fetch.py'],
                    active: false
                },
                {
                    name: 'work',
                    path: '/home/user/work',
                    subdirectories: [],
                    active: false
                },
                {
                    name: 'projects',
                    path: '/home/user/projects',
                    subdirectories: [],
                    active: false
                },
                {
                    name: 'contact',
                    path: '/home/user/contact',
                    subdirectories: ['jason_morofsky_resume.pdf'],
                    active: false
                }
            ]
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()

        // command implementation
        let directories = JSON.parse(JSON.stringify(this.state.directories))
        this.setState({ help: 'helpInactive' })
        let temp = this.state.output2
        if (this.state.input === 'help') {
            this.setState({ output1: temp, output2: this.state.input, help: 'helpActive' })
        } else if (this.state.input === 'hello') {
            this.setState({ output1: temp, output2: 'Hello, world!' })
        } else if (this.state.input.includes('echo')) {
            let sub = this.state.input.substring(5)
            if (sub === '') {
                sub = ' '
            }
            this.setState({ output1: temp, output2: sub })
        } else if (this.state.input === 'pwd') {
            this.state.directories.forEach((element) => {
                if (element.active === true) {
                    this.setState({ output1: temp, output2: element.path })
                }
            })
        } else if (this.state.input === 'ls') {
            this.state.directories.forEach((element) => {
                if (element.active === true) {
                    let subs = element.subdirectories
                    if (subs.length !== 0) {
                        // todo: implement file color
                        this.setState({ output1: temp, output2: subs.join('  ') })
                    } else {
                        this.setState({ output1: temp, output2: 'directory is empty' })
                    }
                }
            })
        } else if (this.state.input.includes('cd')) {
            let sub = this.state.input.substring(3)
            let set = 0
            let set2 = 0

            // if cd
            if (sub === '') {
                // find current directory
                directories.forEach((element) => {
                    if (element.active === true) {
                        element.active = false
                        let path = element.path
                        path = path.substring(0, path.lastIndexOf('/'))

                        directories.forEach((element) => {
                            if (element.path === path) {
                                element.active = true
                                set = 1

                                switch (element.name) {
                                    case 'home':
                                        this.props.setSection(2)
                                        break
                                    case 'about':
                                        this.props.setSection(3)
                                        break
                                    case 'work':
                                        this.props.setSection(4)
                                        break
                                    case 'projects':
                                        this.props.setSection(5)
                                        break
                                    case 'contact':
                                        this.props.setSection(6)
                                        break
                                    default:
                                }
                            }
                        })
                    }
                    set2 = 1
                })
            } else if (sub.includes('.')) {
            } else {
                directories.forEach((element) => {
                    if (element.active === true) {
                        if (set === 0) {
                            element.active = false
                        }
                        element.subdirectories.forEach((subdirectory) => {
                            if (subdirectory === sub) {
                                directories.forEach((element) => {
                                    if (element.name === sub) {
                                        element.active = true
                                        set = 1

                                        switch (element.name) {
                                            case 'home':
                                                this.props.setSection(2)
                                                break
                                            case 'about':
                                                this.props.setSection(3)
                                                break
                                            case 'work':
                                                this.props.setSection(4)
                                                break
                                            case 'projects':
                                                this.props.setSection(5)
                                                break
                                            case 'contact':
                                                this.props.setSection(6)
                                                break
                                            default:
                                        }
                                    }
                                })
                            }
                        })
                    }
                })
            }

            if (set === 1) {
                this.setState({ output1: temp, output2: this.state.input, directories: directories })
            } else if (set2 === 1) {
                this.setState({ output1: temp, output2: 'cd' })
            } else {
                this.setState({ output1: temp, output2: sub + ' does not exist or is not a directory' })
            }
        } else if (this.state.input.includes('mkdir')) {
            let sub = this.state.input.substring(6)
            if (sub === '') {
                this.setState({ output1: temp, output2: 'enter a directory name' })
            } else if (sub.includes('.')) {
                this.setState({ output1: temp, output2: 'invalid character in directory name' })
            } else {
                let newPath
                directories.forEach((element) => {
                    if (element.active === true) {
                        newPath = element.path + '/' + sub
                        element.subdirectories.push(sub)
                    }
                })

                directories.push({
                    name: sub,
                    path: newPath,
                    subdirectories: [],
                    active: false
                })

                this.setState({ output1: temp, output2: this.state.input, directories: directories })
            }
        } else if (this.state.input.includes('touch')) {
            let sub = this.state.input.substring(6)
            if (sub === '') {
                this.setState({ output1: temp, output2: 'enter a file name' })
            } else if (sub.includes('.')) {
                let newPath
                directories.forEach((element) => {
                    if (element.active === true) {
                        newPath = element.path + '/' + sub
                        element.subdirectories.push(sub)
                    }
                })

                directories.push({
                    name: sub,
                    path: newPath,
                    subdirectories: [],
                    active: false
                })

                this.setState({ output1: temp, output2: this.state.input, directories: directories })
            } else {
                this.setState({ output1: temp, output2: 'file needs an extension' })
            }
        } else {
            let error = this.state.input + ': command not recognized'
            this.setState({ output1: temp, output2: error })
        }

        this.setState({ input: '' })
    }

    render() {
        let path
        this.state.directories.forEach((element) => {
            if (element.active === true) {
                if (element.name === 'home') {
                    path = ''
                } else {
                    path = element.path + ' '
                }
            }
        })
        
        return (
            <div>
                <Help help={this.state.help} />

                <section className='jmLinuxContainer'>
                    <div><strong>{this.state.output1}</strong></div>
                    <div><strong>{this.state.output2}</strong></div>
                    <div style={{ color: 'rgb(252, 244, 165)' }}>
                        <strong>user: -{path}$&nbsp;</strong>
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
        )
    }
}

export default JML

// make files different color in ls
