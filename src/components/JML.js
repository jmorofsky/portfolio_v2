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
            help: 'helpInactive'
        }

        this.handleSubmit = this.handleSubmit.bind(this)
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
            switch (this.props.section) {
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
        return (
            <div>
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
            </div>
        )
    }
}

export default JML
