import React from 'react'
import '../css/Book3.css'

class Book3 extends React.Component {
    render() {
        return (
            <div className='container_b3'>
                {/* top */}
                <div className='mediumStripe_b3' />
                <div className='smallStripe_b3' style={{ top: '9px' }} />
                <div className='bigStripe_b3' style={{ top: '9px' }} />
                <div className='smallStripe_b3' style={{ top: '9px' }} />

                {/* bottom */}
                <div className='smallStripe_b3' style={{ top: '135px' }} />
                <div className='mediumStripe_b3' style={{ top: '144px' }} />
            </div>
        )
    }
}

export default Book3
