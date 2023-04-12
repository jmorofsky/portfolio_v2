import React from 'react'
import '../css/Entry.css'

class Entry extends React.Component {
    render() {
        return (
            <div className='entryText'>Jason Morofsky
                <div className='entrySubtext'>
                    <span className='letterFade' style={{ animationDelay: '2s' }}> P</span>
                    <span className='letterFade' style={{ animationDelay: '2.1s' }}>o</span>
                    <span className='letterFade' style={{ animationDelay: '2.4s' }}>r</span>
                    <span className='letterFade' style={{ animationDelay: '2.25s' }}>t</span>
                    <span className='letterFade' style={{ animationDelay: '2.1s' }}>f</span>
                    <span className='letterFade' style={{ animationDelay: '2s' }}>o</span>
                    <span className='letterFade' style={{ animationDelay: '2.6s' }}>l</span>
                    <span className='letterFade' style={{ animationDelay: '2.5s' }}>i</span>
                    <span className='letterFade' style={{ animationDelay: '2.2s' }}>o</span>
                </div>
            </div>
        )
    }
}

export default Entry
