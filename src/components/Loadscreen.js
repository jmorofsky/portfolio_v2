import React from 'react'
import '../css/Loadscreen.css'
import loadGif from '../images/loading.gif'

const quips = ["picking up boost ", "spending runes ", "browsing stackoverflow ",
    "counting macronutrients ", "powering warp drive ", "polishing rims "]

class Loadscreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textID: 0,
            finished: false
        }

        this.setFinished = this.setFinished.bind(this)
    }

    setFinished() {
        this.setState({ finished: true })
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentID = this.state.textID;
            this.setState({ textID: currentID + 1 })
        }, 1500)

        setTimeout(() => { this.setFinished() }, 9000)
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        let text = quips[this.state.textID % quips.length]
        if(this.state.finished === true) {
            text = "done!"
        }

        if (text === "done!") {
            return (
                <div className='loadContainer'>
                    <img src={loadGif} className='loadGif' />
                    <div className='loadOutline' >
                        <div className='loadBar' />
                    </div>
                    <div className='loadTextStatic'>done!</div>
                </div>
            )
        }

        return (
            <div className='loadContainer'>
                <img src={loadGif} className='loadGif' />
                <div className='loadOutline' >
                    <div className='loadBar' />
                </div>
                <div className='loadText'>{text}</div>
            </div>
        )
    }
}

export default Loadscreen